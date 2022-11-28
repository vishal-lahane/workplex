import BlogCard from "../../components/BlogCard";
import CompaniesWithJobCard from "../../components/CompaniesWithJobCard";
import HomePageCategoryList from "../../components/HomePageCategoryList";
import HomePageJobList from "../../components/HomePageJobList";
import WebsiteLayout from "../../layouts/WebsiteLayout";
import { blogs, companiesWithJob } from "../../StaticData/homePage";

const Home4 = () => {
  return (
    <>
      <WebsiteLayout footerType="dark">
        <div className="home-banner margin-bottom-0 home__4">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-xl-6 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="banner_caption text-left mb-4">
                  <h1 className="banner_title ft-bold mb-1">
                    Get The <span className="theme-cl">Right Jobs</span>
                    <br />
                    On Killore
                  </h1>
                  <p className="fs-md ft-regular">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
              <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
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

                <div className="top-searches-key">
                  <ul className="p-0 mt-4 align-items-center d-flex">
                    <li>
                      <span className="text-dark ft-medium medium">
                        Top Searches:
                      </span>
                    </li>
                    <li>
                      <a href="#" className="">
                        WordPress
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Magento
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        HTML5
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomePageCategoryList />
        <HomePageJobList />
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
                    <div
                      className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                      key={j.id}
                    >
                      <CompaniesWithJobCard {...j} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="ht-50"></div>
        </section>
        <section className="space min">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="sec_title position-relative text-center mb-4">
                  <h6 className="text-muted mb-0">Latest News</h6>
                  <h2 className="ft-bold">Pickup New Updates</h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              {blogs.map((b) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                  key={b.id}
                >
                  <BlogCard {...b} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </WebsiteLayout>
    </>
  );
};

export default Home4;
