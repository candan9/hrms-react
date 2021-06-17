import React from 'react'
import EJobAdvList from '../pages/Employer/EJobAdvList';
import EmployerMenu from '../pages/Employer/EmployerMenu';
export default function Employer() {
    return (
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <EmployerMenu />
              </Grid.Column>
              <Grid.Column width={12}>
                <EJobAdvList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
}
