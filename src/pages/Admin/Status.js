import React , { useState, useEffect }from 'react'
import { Dropdown } from "semantic-ui-react";
import JobAdvStatusService from '../../services/jobAdvStatusService';

import JobStatusModal from './JobStatusModal';

export default function Status({ statusOptions, jobAdvId }) {
    const [status, setStatus] = useState([]);
  const [open, setOpen] = useState(false);
  const [newStatus, setNewStatus] = useState([]);
  const setModalState = (value) => {
    setOpen(value);
  };

  useEffect(() => {
    let jobAdvStatusService = new JobAdvStatusService();
    jobAdvStatusService
      .getLastByJobAdvId(jobAdvId)
      .then((result) => {
        setStatus([result.data.data]);
      });
  }, []);

  const dropdownChangeHandler = (data) => {
    setNewStatus(
        statusOptions.filter(
        (statusType) => statusType.value === data.value
      )[0]
    );
    setOpen(true);
  };

  return (
    <div>
      {status?.map((stat, i) => (
        <div key={i}>
          <Dropdown
            placeholder="Durum"
            search
            selection
            defaultValue={stat?.statusType.id}
            options={statusOptions}
            onChange={(event, data) => dropdownChangeHandler(data)}
          />
          <JobStatusModal
            open={open}
            setModalState={setModalState}
            status={status[0]}
            newStatus={newStatus}
            jobPostingId={jobAdvId}
          />
        </div>
      ))}
    </div>
  );
}
