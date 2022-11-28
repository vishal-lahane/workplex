import Image from "next/image";
import HomePageCategoryList from "../../components/HomePageCategoryList";
import HomePageJobList from "../../components/HomePageJobList";
import WebsiteLayout from "../../layouts/WebsiteLayout";
import ProfSecImage from "../../public/img/bn-5.webp";
import AboutSecImage from "../../public/img/bn-4.webp";
import { blogs, partnerLogos } from "../../StaticData/homePage";
import PartnerLogo from "../../components/PartnerLogo";
import BlogCard from "../../components/BlogCard";
const Home3 = () => {
  return (
    <>
      <WebsiteLayout footerType="dark">
        <div className="home-banner margin-bottom-0 home__3" data-overlay="4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_caption text-center mb-5">
                  <h1 className="banner_title ft-bold mb-1">
                    The Most Exciting Jobs
                  </h1>
                  <p className="fs-md ft-medium">Your Dream Jobs is Waiting</p>
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
                          placeholder="Location or Zip Code"
                        />
                        <i className="bnc-ico lni lni-target"></i>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
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

        <section className="space">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="m-spaced">
                  <div className="position-relative">
                    <div className="mb-1">
                      <span className="theme-bg-light theme-cl px-2 py-1 rounded">
                        About Us
                      </span>
                    </div>
                    <h2 className="ft-bold mb-3">
                      Create and Build Your
                      <br />
                      Attractive Profile
                    </h2>
                    <p className="mb-2">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p className="mb-4">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis deleniti atque corrupti quos dolores et
                      quas molestias excepturi sint occaecati cupiditate non
                      provident, similique sunt in culpa qui officia deserunt
                      mollitia animi, id est laborum et dolorum fuga. Et harum
                      quidem rerum facilis est et expedita distinctio.{" "}
                    </p>
                  </div>
                  <div className="position-relative row">
                    <div className="col-lg-4 col-md-4 col-4">
                      <h3 className="ft-bold theme-cl mb-0">10k+</h3>
                      <p className="ft-medium">Active Jobs</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <h3 className="ft-bold theme-cl mb-0">12k+</h3>
                      <p className="ft-medium">Resumes</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <h3 className="ft-bold theme-cl mb-0">07k+</h3>
                      <p className="ft-medium">Employers</p>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12 mt-3">
                      <a
                        href="#"
                        className="btn btn-md theme-bg-light rounded theme-cl hover-theme"
                      >
                        See Details
                        <i className="lni lni-arrow-right-circle ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <div className="position-relative">
                  <Image src={ProfSecImage} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space pt-0">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <div className="position-relative">
                  <Image src={AboutSecImage} className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="m-spaced">
                  <div className="position-relative">
                    <div className="mb-1">
                      <span className="theme-bg-light theme-cl px-2 py-1 rounded">
                        About Us
                      </span>
                    </div>
                    <h2 className="ft-bold mb-3">
                      Get All The Jobs Details
                      <br />
                      You&apos;re Looking For
                    </h2>
                    <p className="mb-3">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                  <div className="position-relative row">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                            <i className="fas fa-check"></i>
                          </div>
                          <h6 className="mb-0 ml-3">Full lifetime access</h6>
                        </div>
                      </div>
                      <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                            <i className="fas fa-check"></i>
                          </div>
                          <h6 className="mb-0 ml-3">
                            20+ downloadable resources
                          </h6>
                        </div>
                      </div>
                      <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                            <i className="fas fa-check"></i>
                          </div>
                          <h6 className="mb-0 ml-3">
                            Certificate of completion
                          </h6>
                        </div>
                      </div>
                      <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                            <i className="fas fa-check"></i>
                          </div>
                          <h6 className="mb-0 ml-3">Free Trial 7 Days</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12 mt-4">
                      <a
                        href="#"
                        className="btn btn-md theme-bg rounded text-white hover-theme"
                      >
                        Get Started
                        <i className="lni lni-arrow-right-circle ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
                <div className="sec_title position-relative text-center mb-5">
                  <h6 className="text-muted mb-0">Our Partners</h6>
                  <h2 className="ft-bold">
                    We Have Worked with{" "}
                    <span className="theme-cl">10,000+</span> Trusted Companies
                  </h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              {partnerLogos.map((p, i) => (
                <PartnerLogo img={p} key={i} />
              ))}
            </div>
          </div>
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

export default Home3;
