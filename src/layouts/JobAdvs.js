import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import JobAdvList from "../pages/JobAdvs/JobAdvList";
import JobAdvDetails from "../pages/JobAdvs/JobAdvDetails";
export default function JobAdvs() {
  const [jobAdv, setJobAdv] = useState(null);

  const setCurrentJobAdv = (value) => {
    setJobAdv(value);
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <JobAdvList setCurrentJobAdv={setCurrentJobAdv} />
          </Grid.Column>
          <Grid.Column width={8}>
            <JobAdvDetails jobAdv={jobAdv} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}