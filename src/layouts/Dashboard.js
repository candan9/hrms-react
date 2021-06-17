import React from 'react'
import { Route } from "react-router";
import Admin from './Admin';
import Employer from './Employer';
import JobAdvs from './JobAdvs';
export default function Dashboard() {
    return (
        <div>
          <Route exact path="/" component={JobAdvs} />
          <Route exact path="/jobadvs" component={JobAdvs} />
          <Route path="/employer" component={Employer} />
          <Route path="/admin" component={Admin} />
        </div>
      );
}
