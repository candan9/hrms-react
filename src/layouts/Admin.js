import React from 'react'
import { Grid } from "semantic-ui-react";
import AdminMenu from '../pages/Admin/AdminMenu';
import AJobAdvList from '../pages/Admin/AJobAdvList';
export default function Admin() {
    return (
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <AdminMenu />
              </Grid.Column>
              <Grid.Column width={12}>
                <AJobAdvList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
}
