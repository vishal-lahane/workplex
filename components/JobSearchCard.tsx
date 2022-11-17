import Image from "next/image";
import React from "react";
import { JobCard } from "../Models/DataTypes";
import CompanyLogo from "../public/img/c-1.png";
const JobSearchCard = ({
  id,
  type,
  logoPath,
  companyName,
  jobTitle,
  jobLocation,
  salaryRange,
  posted,
}: JobCard) => {
  const jobTypeClassNames = () => {
    switch (type) {
      case "Full Time":
        return "medium theme-cl theme-bg-light px-2 py-1 rounded";
      case "Part Time":
        return "medium bg-light-warning text-warning px-2 py-1 rounded";
      case "Contract":
        return "medium bg-light-purple text-purple px-2 py-1 rounded";
      case "Intership":
        return "medium bg-light-danger text-danger px-2 py-1 rounded";
      default:
        return "medium theme-cl theme-bg-light px-2 py-1 rounded";
    }
  };
  return (
    <div className="job_grid border rounded ">
      <div className="position-absolute ab-left">
        <button
          type="button"
          className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
        >
          <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
        </button>
      </div>
      <div className="position-absolute ab-right">
        <span className={jobTypeClassNames()}>{type}</span>
      </div>
      <div className="job_grid_thumb mb-3 pt-5 px-3">
        <a href="job-detail.html" className="d-block text-center m-auto">
          <Image
            src={CompanyLogo}
            className="img-fluid"
            width="70"
            height="70"
            alt=""
          />
        </a>
      </div>
      <div className="job_grid_caption text-center pb-5 px-3">
        <h6 className="mb-0 lh-1 ft-medium medium">
          <a href="employer-detail.html" className="text-muted medium">
            {companyName}
          </a>
        </h6>
        <h4 className="mb-0 ft-medium medium">
          <a href="job-detail.html" className="text-dark fs-md">
            {jobTitle}
          </a>
        </h4>
        <div className="jbl_location">
          <i className="lni lni-map-marker mr-1"></i>
          <span>{jobLocation}</span>
        </div>
      </div>
      <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
        <div className="df-1 text-muted">
          <i className="lni lni-wallet mr-1"></i>
          {salaryRange}
        </div>
        <div className="df-1 text-muted">
          <i className="lni lni-timer mr-1"></i>
          {posted}
        </div>
      </div>
    </div>
  );
};

export default JobSearchCard;
