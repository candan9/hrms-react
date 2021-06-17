import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobAdvService from "../../services/jobAdvService";
import JobAdv from "./JobAdv";
export default function JobAdvList({ setCurrentJobAdv }) {
    const [jobAdvs, setJobAdvs] = useState([]);
    useEffect(() => {
      let jobAdvService = new JobAdvService();
      jobAdvService
        .getAllApprovedStatus()
        .then((result) => setCurrentJobAdv(result.data.data));
    }, []);
    return (
      <section>
        <Table >
          <Table.Body>
            {jobAdvs.map((jobAdv, i) => (
              <Table.Row key={i}>
                <Table.Cell>
                  <JobAdv
                    setCurrentJobPost={setCurrentJobAdv}
                    jobPost={jobAdv}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </section>
    );
}
