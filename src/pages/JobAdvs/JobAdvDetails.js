import React from 'react'
import JobInfo from './JobInfo';
import JobDescription from './JobDescription';
import JobSalary from './JobSalary';
export default function JobAdvDetails({ jobAdv }) {
    return (
        <div>
          {jobAdv && (
            <section >
              <div style={{ padding: "16px 12px" }}>
                <div style={{ paddingTop: "24px" }}>
                  <JobInfo jobAdv={jobAdv} />
                </div>
                <div>
                  <JobDescription jobAdv={jobAdv} />
                  <JobSalary jobAdv={jobAdv} />
                </div>
              </div>
            </section>
          )}
        </div>
      );
}
