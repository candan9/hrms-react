import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Label,
  Message,
  Modal,
  TextArea,
} from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Menu } from "semantic-ui-react";
import JobAdvService from '../../services/jobAdvService';
import ProvinceService from '../../services/provinceService';
import EmploymentService from '../../services/employmentService';
export default function AddJobAdv({triggerButton }) {
    let jobAdvService = new JobAdvService();

    const [jobAdvs, setJobAdvs] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [employments, setEmployments] = useState([]);
  
    useEffect(() => {
      fetchJobAdvs();
      fetchProvinces();
      fetchEmployments();
    }, []);
  
    const fetchEmployments = () => {
      let employmentService = new EmploymentService();
      employmentService
        .getAll()
        .then((result) => setEmployments(result.data.data));
    };
  
    const fetchJobAdvs = () => {
      let jobAdvService = new JobAdvService();
      jobAdvService
        .getAll()
        .then((result) => setJobAdvs(result.data.data));
    };
  
    const fetchProvinces = () => {
      let provinceService = new ProvinceService();
      provinceService.getAll().then((result) => setProvinces(result.data.data));
    };
  
    const jobAdvsOptions = jobAdvs.map((jobAdv, index) => ({
      key: index,
      text: jobAdv.name,
      value: jobAdv.id,
    }));
    const provincesOptions = provinces.map((province, index) => ({
      key: index,
      text: province.name,
      value: province.id,
    }));
  
    const employmentOptions = employments.map(
      (employment, index) => ({
        key: index,
        text: employment.name,
        value: employment.id,
      })
    );
  
    const addJobAdvSchema = Yup.object().shape({
      jobAdvId: Yup.number().required("İş pozisyonu seçilmesi gerekiyor!"),
      provinceId: Yup.number().required("Şehir seçilmesi gerekiyor!"),
      employmentId: Yup.number().required(
        "İstihdam türü seçilmesi gerekiyor!"
      ),
      minSalary: Yup.number().min(0, "En az maaş 0'dan küçük olamaz!"),
      maxSalary: Yup.number().min(0, "En çok maaş 0'dan küçük olamaz!"),
      openPositionCount: Yup.number()
        .min(0, "Açık pozisyon sayısı 0'dan küçük olamaz!")
        .required("Açık pozisyon sayısı boş bırakılamaz!"),
      applicationDeadline: Yup.date()
        .nullable()
        .required("Son başvuru tarihi seçilmesi gerekiyor!"),
      jobDescription: Yup.string().required("İş açıklaması boş bırakılamaz!"),
    });
  
    const formik = useFormik({
      initialValues: {
        jobAdvId: "",
        provinceId: "",
        employmentId: "",
        minSalary: "",
        maxSalary: "",
        openPositionCount: "",
        applicationDeadline: "",
        jobDescription: "",
        isRemote: false,
      },
      validationSchema: addJobAdvSchema,
      onSubmit: (values) => {
        let jobAdv = {
          jobAdv: {
            id: values.jobAdvId,
          },
          province: {
            id: values.provinceId,
          },
          employment: {
            id: values.employmentId,
          },
          employer: {
            id: 1, // fakeid
          },
          minSalary: values.minSalary,
          maxSalary: values.maxSalary,
          openPositionCount: values.openPositionCount,
          applicationDeadline: values.applicationDeadline,
          jobDescription: values.jobDescription,
          isRemote: values.isRemote,
        };
        jobAdvService.add(jobAdv).then((result) => console.log(result));
      },
    });
  
    const handleFormErrorMessages = () => {
      let errorMessages = Object.keys(formik.errors).map((key, i) => {
        return formik.errors[key];
      });
      return errorMessages;
    };
  
    const [open, setOpen] = useState(false);
  
    const handleChangeSemantic = (value, fieldName) => {
      formik.setFieldValue(fieldName, value);
    };
  
    return (
      <div>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={triggerButton}
          size="tiny"
          closeIcon
        >
          <Modal.Header>İş ilanı ekle</Modal.Header>
          <Modal.Content>
            <form onSubmit={formik.handleSubmit}>
              <Modal.Description>
                <div style={{ marginBottom: "1rem" }}>
                  {handleFormErrorMessages().length > 0 && (
                    <Message
                      error
                      header="Aşağıdaki uyarıları dikkate alınız!"
                      list={handleFormErrorMessages()}
                    />
                  )}
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <Dropdown
                    className="width-100-percent"
                    item
                    placeholder="Pozisyon seçin"
                    search
                    selection
                    clearable
                    error={formik.errors.jobAdvId ? true : false}
                    onChange={(event, data) => {
                      handleChangeSemantic(data.value, "jobAdvId");
                      handleFormErrorMessages();
                    }}
                    onBlur={formik.onBlur}
                    id="jobAdvId"
                    value={formik.values.jobAdvId}
                    options={jobAdvsOptions}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <Dropdown
                    className="width-100-percent"
                    item
                    placeholder="Şehir seçin"
                    search
                    selection
                    clearable
                    error={formik.errors.provinceId ? true : false}
                    onChange={(event, data) => {
                      handleChangeSemantic(data.value, "provinceId");
                      handleFormErrorMessages();
                    }}
                    onBlur={formik.onBlur}
                    id="provinceId"
                    value={formik.values.provinceId}
                    options={provincesOptions}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <Dropdown
                    className="width-100-percent"
                    item
                    placeholder="İstihdam türü seçin"
                    search
                    selection
                    clearable
                    error={formik.errors.employmentId ? true : false}
                    onChange={(event, data) => {
                      handleChangeSemantic(data.value, "employmentId");
                      handleFormErrorMessages();
                    }}
                    onBlur={formik.onBlur}
                    id="employmentId"
                    value={formik.values.employmentId}
                    options={employmentOptions}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <div
                    className="width-40-percent display-inline-block"
                    style={{ marginRight: "5rem" }}
                  >
                    <Input
                      labelPosition="right"
                      type="number"
                      placeholder="En az maaş"
                      error={formik.errors.minSalary ? true : false}
                      value={formik.values.minSalary}
                      name="minSalary"
                      onChange={(e) => {
                        formik.handleChange(e);
                        handleFormErrorMessages();
                      }}
                      onBlur={formik.handleBlur}
                    >
                      <input />
                      <Label>₺</Label>
                    </Input>
                  </div>
                  <div className="width-40-percent display-inline-block">
                    <Input
                      labelPosition="right"
                      type="number"
                      placeholder="En fazla maaş"
                      error={formik.errors.maxSalary ? true : false}
                      value={formik.values.maxSalary}
                      name="maxSalary"
                      onChange={(e) => {
                        formik.handleChange(e);
                        handleFormErrorMessages();
                      }}
                      onBlur={formik.handleBlur}
                    >
                      <input />
                      <Label>₺</Label>
                    </Input>
                  </div>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <div
                    className="display-inline-block"
                    style={{ width: "43%", marginRight: "3rem" }}
                  >
                    <Input
                      className="width-100-percent"
                      name="openPositionCount"
                      error={formik.errors.openPositionCount ? true : false}
                      onChange={(e) => {
                        formik.handleChange(e);
                        handleFormErrorMessages();
                      }}
                      value={formik.values.openPositionCount}
                      onBlur={formik.handleBlur}
                      type="number"
                      placeholder="Açık pozisyon sayısı"
                    />
                  </div>
                  <div className="display-inline-block" style={{ width: "46%" }}>
                    <SemanticDatepicker
                      error={formik.errors.applicationDeadline ? true : false}
                      onChange={(event, data) => {
                        handleChangeSemantic(data.value, "applicationDeadline");
                        handleFormErrorMessages();
                      }}
                      value={formik.values.applicationDeadline}
                      onBlur={formik.handleBlur}
                      name="applicationDeadline"
                      placeholder="Son başvuru tarihi"
                    />
                  </div>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <TextArea
                    placeholder="İş açıklaması (tüm detaylarıyla)"
                    className="width-100-percent"
                    style={{ minHeight: 100 }}
                    value={formik.values.jobDescription}
                    name="jobDescription"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleFormErrorMessages();
                    }}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div
                  style={{
                    float: "right",
                    padding: "1rem",
                    borderTop: "1px solid #EBEBEBEB",
                  }}
                  className="width-100-percent"
                >
                  <div style={{ float: "right" }}>
                    <Checkbox
                      toggle
                      name="isRemote"
                      onChange={(event, data) => {
                        handleChangeSemantic(data.checked, "isRemote");
                      }}
                      onBlur={formik.handleBlur}
                      label="Uzaktan"
                    />
                    <Button
                      content="Ekle"
                      labelPosition="right"
                      icon="add"
                      positive
                      type="submit"
                      style={{ marginLeft: "20px" }}
                    />
                  </div>
                </div>
              </Modal.Description>
            </form>
          </Modal.Content>
        </Modal>
      </div>
    );
}
