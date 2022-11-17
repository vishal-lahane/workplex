import React from "react";
import CompaniesWithJobCard from "../../components/CompaniesWithJobCard";
import HomePageCategoryList from "../../components/HomePageCategoryList";
import HomePageJobList from "../../components/HomePageJobList";
import HomePagePackages from "../../components/HomePagePackages";
import { companiesWithJob } from "../../StaticData/homePage";

const Home2 = () => {
  return (
    <>
      <div className="home-banner margin-bottom-0 home__2" data-overlay="5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="banner_caption text-center mb-5">
                <h1 className="banner_title ft-bold mb-1">
                  Explore More Than 10K+ Jobs
                </h1>
                <p className="fs-md ft-medium">
                  Hi Friends, Your Dream Jobs is Waiting in Your Local City
                </p>
              </div>

              <form className="bg-white rounded p-1">
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Job Title, Keyword or Company"
                      />
                      <i className="bnc-ico lni lni-search-alt"></i>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Job Title, Keyword or Company"
                      />
                      <i className="bnc-ico lni lni-target"></i>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <select className="custom-select lg b-0">
                        <option value="1">Choose Location</option>
                        <option value="2">Los Angeles</option>
                        <option value="3">San Francisco</option>
                        <option value="4">San Diego</option>
                        <option value="5">Philadelphia</option>
                        <option value="6">Denver</option>
                        <option value="7">Houston</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <button
                        className="btn full-width custom-height-lg theme-bg text-white fs-md"
                        type="button"
                      >
                        Find Job
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <HomePageJobList />
      <HomePageCategoryList />
      <section className="bg-cover company__sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-light mb-0">Current Openings</h6>
                <h2 className="ft-bold text-light">
                  We Have Worked with 10,000+ Trusted Companies
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12">
              <div className="row justify-content-center">
                {companiesWithJob.map((j) => (
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <CompaniesWithJobCard {...j} key={j.id} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="ht-50"></div>
      </section>
      <HomePagePackages />
    </>
  );
};

export default Home2;
