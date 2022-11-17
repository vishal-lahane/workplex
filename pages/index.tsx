import Image from "next/image";
import CategoryCard from "../components/CategoryCard";
import {
  blogs,
  categories,
  packages,
  partnerLogos,
} from "../StaticData/homePage";
import ProfSecImage from "../public/img/bn-5.webp";
import appImage from "../public/img/app.webp";
import iosMark from "../public/img/ios.png";
import andMark from "../public/img/and.png";
import PartnerLogo from "../components/PartnerLogo";
import Package from "../components/Package";
import BlogCard from "../components/BlogCard";
import HomePageJobList from "../components/HomePageJobList";
import HomePageCategoryList from "../components/HomePageCategoryList";
import HomePagePackages from "../components/HomePagePackages";

export default function Home() {
  return (
    <>
      <div className="home-banner margin-bottom-0 home__1" data-overlay="5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="banner_caption text-center mb-5">
                <h1 className="banner_title ft-bold mb-1">
                  <span className="count">72412</span> jobs Listed Here!
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

              <div className="text-center align-items-center justify-content-center mt-5">
                <a
                  href="#"
                  className="btn bg-white hover-theme ft-regular mr-1"
                >
                  <i className="lni lni-user mr-1"></i>Create Account
                </a>
                <a
                  href="#"
                  className="btn bg-dark hover-theme text-light ft-regular ml-1"
                >
                  <i className="lni lni-upload mr-1"></i>Upload Resume
                </a>
              </div>
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
                    qui blanditiis deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident,
                    similique sunt in culpa qui officia deserunt mollitia animi,
                    id est laborum et dolorum fuga. Et harum quidem rerum
                    facilis est et expedita distinctio.{" "}
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
      <section className="p-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Our Partners</h6>
                <h2 className="ft-bold">
                  We Have Worked with <span className="theme-cl">10,000+</span>{" "}
                  Trusted Companies
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
      <HomePagePackages />
      <section className="space min gray">
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
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={b.id}>
                <BlogCard {...b} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_2 pr-3 py-4">
                <div className="content-box">
                  <div className="sec-title light">
                    <p className="theme-cl px-3 py-1 rounded bg-light-success d-inline-flex">
                      Download apps
                    </p>
                    <h2 className="ft-bold">
                      Get the Workplex Job
                      <br />
                      Search App
                    </h2>
                  </div>
                  <div className="text">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto accusantium.
                    </p>
                  </div>
                  <div className="btn-box clearfix mt-5">
                    <a
                      href="index.html"
                      className="download-btn play-store mb-1 d-inline-flex"
                    >
                      <Image src={iosMark} width="200" alt="" />
                    </a>
                    <a
                      href="index.html"
                      className="download-btn play-store ml-2 mb-1 d-inline-flex"
                    >
                      <Image src={andMark} width="200" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <figure className="image">
                  <Image src={appImage} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
