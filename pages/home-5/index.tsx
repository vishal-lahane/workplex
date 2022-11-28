import Image from "next/image";
import React from "react";
import CandidateSearchResultSearchCard from "../../components/CandidateSearchResultSearchCard";
import HomePageCategoryList from "../../components/HomePageCategoryList";
import HomePageJobList from "../../components/HomePageJobList";
import JobSearchListView from "../../components/JobSearchListView";
import WebsiteLayout from "../../layouts/WebsiteLayout";
import banner1 from "../../public/img/bn-2.webp";
import bfl1 from "../../public/img/img-1.png";
import bfl2 from "../../public/img/img-2.png";
import bfl3 from "../../public/img/img-3.png";
import { candidates } from "../../StaticData/homePage";

const Home5 = () => {
  return (
    <>
      <WebsiteLayout>
        <div className="home-banner margin-bottom-0 intro-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                <div className="banner_caption text-left mb-4">
                  <div className="d-block mb-2">
                    <span className="px-3 py-1 medium theme-bg-light theme-cl rounded">
                      Get Trending jobs
                    </span>
                  </div>
                  <h1 className="banner_title ft-bold mb-1">
                    Explore More Than
                    <br />
                    <span className="theme-cl">7840+</span> Jobs
                  </h1>
                  <p className="fs-md ft-regular">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
                <form className="bg-white rounded p-1">
                  <div className="row no-gutters">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                      <div className="form-group mb-0 position-relative">
                        <input
                          type="text"
                          className="form-control lg left-ico"
                          placeholder="Job Title, Keyword or Company"
                        />
                        <i className="bnc-ico lni lni-search-alt"></i>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="form-group mb-0 position-relative">
                        <select className="custom-select lg b-0">
                          <option value="1">Choose Categories</option>
                          <option value="2">Information Technology</option>
                          <option value="3">Cloud Computing</option>
                          <option value="4">Engineering Services</option>
                          <option value="5">Healthcare/Pharma</option>
                          <option value="6">Telecom/ Internet</option>
                          <option value="7">Finance/Insurance</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12">
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
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="bnr_thumb position-relative">
                  <Image src={banner1} className="img-fluid bnr_img" alt="" />
                  <div className="list_crs_img">
                    <Image
                      src={bfl1}
                      className="img-fluid elsio cirl animate-fl-y"
                      alt=""
                    />
                    <Image
                      src={bfl3}
                      className="img-fluid elsio arrow animate-fl-x"
                      alt=""
                    />
                    <Image
                      src={bfl2}
                      className="img-fluid elsio moon animate-fl-x"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="p-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="crp_box fl_color ovr_top">
                  <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="dro_140">
                        <div className="dro_141 de">
                          <i className="fa fa-journal-whills"></i>
                        </div>
                        <div className="dro_142">
                          <h6>7421 Active jobs</h6>
                          <p>
                            Duis aute irure dolor in voluptate velit esse cillum
                            labore .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="dro_140">
                        <div className="dro_141 de">
                          <i className="fa fa-business-time"></i>
                        </div>
                        <div className="dro_142">
                          <h6>2410 Employers</h6>
                          <p>
                            Duis aute irure dolor in voluptate velit esse cillum
                            labore .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="dro_140">
                        <div className="dro_141 de">
                          <i className="fa fa-user-shield"></i>
                        </div>
                        <div className="dro_142">
                          <h6>800k+ Enrolled</h6>
                          <p>
                            Duis aute irure dolor in voluptate velit esse cillum
                            labore .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="middle">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="sec_title position-relative text-center mb-5">
                  <h6 className="text-muted mb-0">Recent Jobs</h6>
                  <h2 className="ft-bold">
                    Recent Active <span className="theme-cl">Listed jobs</span>
                  </h2>
                </div>
              </div>
            </div>

            <JobSearchListView />

            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="position-relative text-center">
                  <a
                    href="job-search-v1.html"
                    className="btn btn-md theme-bg rounded text-light hover-theme"
                  >
                    Explore More Jobs
                    <i className="lni lni-arrow-right-circle ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomePageCategoryList />
        <HomePageJobList />
        <section className="space min">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="sec_title position-relative text-center mb-5">
                  <h6 className="text-muted mb-0">Top Candidates</h6>
                  <h2 className="ft-bold">
                    Hire Top <span className="theme-cl">Candidates</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              {candidates.map((c, i) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={i}>
                  <CandidateSearchResultSearchCard {...c} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </WebsiteLayout>
    </>
  );
};

export default Home5;
