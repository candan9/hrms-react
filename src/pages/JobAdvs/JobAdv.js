import React from 'react'

export default function JobAdv({ jobAdv, setCurrentJobAdv }) {
    let defaultImage =
    "https://res.cloudinary.com/cloudlucifer/image/upload/v1622506272/iym1dgabn6cil6hhugck.jpg";

  function setJobDetails() {
    setCurrentJobAdv(jobAdv);
  }

  function getHowLongAgo(publishedAt) {
    let today = new Date();
    let publishedDate = new Date(publishedAt);
    let difference = today.getTime() - publishedDate.getTime();
    let days = difference / (1000 * 3600 * 24);
    if (days > 30) {
      return Math.floor(days / 30) + " ay önce";
    }
    if (days > 7) {
      return Math.floor(days / 7) + " hafta önce";
    }
    if (Math.floor(days) <= 0) {
      return "Bugün";
    }
    return Math.floor(days) + " gün önce";
  }
  return (
    <div>
      <div >
        <div >
          <img src={defaultImage} alt="" width="64" height="64" />
        </div>
        <div >
          <div >
            <div onClick={() => setJobDetails()}>
              {jobAdv.jobPosition.name}
            </div>
          </div>
          <div >
            <div>{jobAdv.employer.employerName}</div>
          </div>
          <div >
            <span>{jobAdv.province.name}</span>
          </div>
          <div>
            <time dateTime={jobAdv.publishedAt} >
              {getHowLongAgo(jobAdv.publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
