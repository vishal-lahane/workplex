import Image from "next/image";
import React from "react";
import { CompWithJobCard } from "../Models/DataTypes";

const CompaniesWithJobCard = ({
  id,
  logo,
  companyName,
  jobs,
}: CompWithJobCard) => {
  return (
    <>
      <div className="cats-wrap text-left">
        <a
          href="job-search-v1.html"
          className="cats-box rounded bg-white d-flex align-items-center px-2 py-3"
        >
          <div className="text-center">
            <Image src={logo} className="img-fluid" width="55" alt="" />
          </div>
          <div className="cats-box-caption px-2">
            <h4 className="fs-md mb-0 ft-medium">{companyName}</h4>
            <span className="text-muted">{jobs} Jobs</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default CompaniesWithJobCard;
