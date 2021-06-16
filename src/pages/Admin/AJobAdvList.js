import React , { useState, useEffect } from 'react';
import { Icon, Table } from "semantic-ui-react";
import JobAdvService from '../../services/jobAdvService';

export default function AJobAdvList() {
    const [jobAdv, setJobAdvs] = useState([]);
    const [status, setStatuses] = useState([]);
  
    useEffect(() => {
      fetchJobPostings();
      fetchStatusTypes();
    }, []);
  
    const fetchJobAdvs = () => {
      let jobAdvService = new JobAdvService();
      jobAdvService.getAll().then((result) => {
        setJobAdvss(result.data.data);
      });
    };
  
    const fetchStatuses = () => {
      let statusService = new StatusService();
      statusService.getAll().then((result) => {
        setStatuses(result.data.data);
      });
    };
  
    const statusOptions = statuses.map((statuses, index) => ({
      key: index,
      text: statuses.name,
      value: status.id,
    }));
  
    return (
      <section className="scroll-bar overflow-scroll scroll-height">
        <Table celled selectable structured>
          <Table.Header align="center">
            <Table.Row>
              <Table.HeaderCell rowSpan="2">Durum</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Pozisyona</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Şehir</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Açıklama</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">
                Açık pozisyon sayısı
              </Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Maaş skalası</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Yayınlanma tarihi</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Son başvuru tarihi</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">İstihdam türü</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Uzaktan</Table.HeaderCell>
              <Table.HeaderCell colSpan="2" textAlign="center">
                Durum
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Aktif</Table.HeaderCell>
              <Table.HeaderCell>Onaylanmış</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {jobAdvs.map((jobAdv, i) => (
              <Table.Row key={i}>
                <Table.Cell>
                  <StatusDropdown
                    statusOptions={statusOptions}
                    jobAdvId={jobAdv.id}
                  />
                </Table.Cell>
  
                <Table.Cell>{jobAdv.job.name}</Table.Cell>
                <Table.Cell>{jobAdv.city.name}</Table.Cell>
                <Table.Cell singleLine>
                  {jobAdv.jobDescription.substring(0, 20)}
                </Table.Cell>
                <Table.Cell>{jobAdv.openPositionCount}</Table.Cell>
                <Table.Cell>
                  {jobAdv.minSalary} ₺ - {jobAdv.maxSalary} ₺
                </Table.Cell>
                <Table.Cell>{jobAdv.publishedAt}</Table.Cell>
                <Table.Cell>{jobAdv.applicationDeadline}</Table.Cell>
                <Table.Cell>{jobAdv.employment?.name}</Table.Cell>
                {jobAdv.isRemote ? (
                  <Table.Cell textAlign="center">
                    <Icon color="green" name="checkmark" size="large" />
                  </Table.Cell>
                ) : (
                  <Table.Cell />
                )}
                {jobAdv.active ? (
                  <Table.Cell textAlign="center">
                    <Icon color="green" name="checkmark" size="large" />
                  </Table.Cell>
                ) : (
                  <Table.Cell />
                )}
                {jobAdv.jobAdvConfirmation?.confirmed ? (
                  <Table.Cell textAlign="center">
                    <Icon color="green" name="checkmark" size="large" />
                  </Table.Cell>
                ) : (
                  <Table.Cell />
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </section>
    );
}
