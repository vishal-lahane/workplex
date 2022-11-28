import Image from "next/image";
import CandidateSearchResultSearchCard from "../../components/CandidateSearchResultSearchCard";
import HomePageCategoryList from "../../components/HomePageCategoryList";
import HomePageJobList from "../../components/HomePageJobList";
import JobSearchListView from "../../components/JobSearchListView";
import WebsiteLayout from "../../layouts/WebsiteLayout";
import intro from "../../public/img/intro.webp";
import { candidates } from "../../StaticData/homePage";

const Home8 = () => {
  return (
    <>
      <WebsiteLayout footerType="dark">
        <div className="home-banner margin-bottom-0 intro-bg intro-banner">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-5 col-lg-7 col-md-7 col-sm-12 col-12">
                <form className="bg-white rounded p-4">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <h2 className="mb-0 ft-bold">Find your Job</h2>
                        <p className="fs-md text-muted">
                          Hire experts or be hired in sales &amp; marketing
                        </p>
                      </div>

                      <div className="form-group position-relative">
                        <input
                          type="text"
                          className="form-control lg form-ico border"
                          placeholder="Job Title, Keyword or Company"
                        />
                        <i className="bnc-ico lni lni-search-alt"></i>
                      </div>
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          className="form-control lg form-ico"
                          placeholder="Location or Zip Code"
                        />
                        <i className="bnc-ico lni lni-target"></i>
                      </div>
                      <div className="form-group position-relative">
                        <select className="custom-select lg border">
                          <option value="1">Choose Categories</option>
                          <option value="2">Information Technology</option>
                          <option value="3">Cloud Computing</option>
                          <option value="4">Engineering Services</option>
                          <option value="5">Healthcare/Pharma</option>
                          <option value="6">Telecom/ Internet</option>
                          <option value="7">Finance/Insurance</option>
                        </select>
                      </div>
                      <div className="form-group position-relative">
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
                <div className="top-searches-key">
                  <ul className="p-0 mt-4 align-items-center d-flex">
                    <li>
                      <span className="text-dark ft-medium medium">
                        Top Searches:
                      </span>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="">
                        WordPress
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="">
                        Magento
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="">
                        HTML5
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-6 col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="bnr_thumb position-relative">
                  <Image src={intro} className="img-fluid bnr_img" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Home8;
