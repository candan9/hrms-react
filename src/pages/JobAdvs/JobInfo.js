import React from 'react'
import { Button, Icon } from "semantic-ui-react";
export default function JobInfo({ jobAdv }) {
    let defaultImage =
    "https://res.cloudinary.com/hrmsemre/image/upload/v1622749031/sample.jpg";

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
    <div >
      <div >
        <img src={defaultImage} alt="" width="122" height="122" />
      </div>
      <div style={{ display: "flex" }}>
        <div >
          <div >
            <span>{jobAdv.jobPosition.name}</span>
          </div>
          <div >
            <span >{jobAdv.employer.employerName}</span>
            &nbsp; | &nbsp;
            <span >{jobAdv.province.name}</span>
          </div>
          <div>
            <time dateTime={jobAdv.publishedAt} >
              {getHowLongAgo(jobAdv.publishedAt)} yayınlandı.
            </time>
          </div>
        </div>
      </div>
      <div style={{ float: "left", marginTop: "10px" }}>
        <Button icon labelPosition="right" size="medium">
          Şirket websitesi
          <Icon name="linkify" />
        </Button>
        <Button color="green" icon labelPosition="right" size="medium">
          Başvur
          <Icon name="external alternate" />
        </Button>
      </div>
    </div>
  );
}
