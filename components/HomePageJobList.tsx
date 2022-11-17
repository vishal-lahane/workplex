import React from "react";
import { jobs } from "../StaticData/homePage";
import JobSearchCard from "./JobSearchCard";

const HomePageJobList = () => {
  return (
    <>
      <section className="middle">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Trending Jobs</h6>
                <h2 className="ft-bold">All Popular Listed jobs</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            {jobs.map((j) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={j.id}>
                <JobSearchCard {...j} />
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="position-relative text-center">
                <a
                  href="job-search-v1.html"
                  className="btn btn-md theme-bg-light rounded theme-cl hover-theme"
                >
                  Explore More Jobs
                  <i className="lni lni-arrow-right-circle ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageJobList;
