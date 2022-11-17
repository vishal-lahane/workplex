import React from "react";
import { jobs } from "../StaticData/homePage";
import JobSearchCard from "./JobSearchCard";

const JobSearchGridView = () => {
  return (
    <>
      <div className="row align-items-center">
        {jobs.map((j) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={j.id}>
            <JobSearchCard {...j} />
          </div>
        ))}
      </div>
    </>
  );
};

export default JobSearchGridView;
