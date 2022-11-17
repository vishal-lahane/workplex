import Image from "next/image";
import React from "react";
import { JobCard } from "../Models/DataTypes";
import CompanyLogo from "../public/img/c-1.png";
const JobSearchListCard = ({
  id,
  type,
  logoPath,
  companyName,
  jobTitle,
  jobLocation,
  salaryRange,
  posted,
  expReq,
}: JobCard) => {
  return (
    <>
      <div className="jbr-wrap text-left border rounded">
        <div className="cats-box mlb-res rounded bg-white d-flex align-items-center justify-content-between px-3 py-3">
          <div className="cats-box rounded bg-white d-flex align-items-center">
            <div className="text-center">
              <Image
                src={CompanyLogo}
                className="img-fluid"
                width="55"
                alt=""
              />
            </div>
            <div className="cats-box-caption px-2">
              <h4 className="fs-md mb-0 ft-medium">
                {jobTitle} ({expReq})
              </h4>
              <div className="d-block mb-2 position-relative">
                <span className="text-muted medium">
                  <i className="lni lni-map-marker mr-1"></i>
                  {jobLocation}
                </span>
                <span className="muted medium ml-2 theme-cl">
                  <i className="lni lni-briefcase mr-1"></i>
                  {type}
                </span>
              </div>
            </div>
          </div>
          <div className="text-center mlb-last">
            <a
              href="job-detail.html"
              className="btn gray ft-medium apply-btn fs-sm rounded"
            >
              Apply Job<i className="lni lni-arrow-right-circle ml-1"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSearchListCard;
