import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../public/img/logo.png";
const Navbar = () => {
  const [topFixed, setTopFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setTopFixed(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={
          topFixed
            ? "header header-light dark-text header-fixed"
            : "header header-light dark-text"
        }
      >
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <Link className="nav-brand" href="/">
                <Image
                  src={Logo}
                  className="logo"
                  style={{ height: "auto" }}
                  alt=""
                />
              </Link>
              <div className="nav-toggle"></div>
              <div className="mobile_nav">
                <ul>
                  <li>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#login"
                      className="theme-cl fs-lg"
                    >
                      <i className="lni lni-user"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#login"
                      className="crs_yuo12 w-auto text-white theme-bg"
                    >
                      <span className="embos_45">
                        <i className="fas fa-plus-circle mr-1 mr-1"></i>Post Job
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{ transitionProperty: "none" }}
            >
              <ul className="nav-menu">
                <li>
                  <a href="#" className="submenu-con">
                    Home
                    <span className="submenu-indicator">
                      <span className="submenu-indicator-chevron"></span>
                    </span>
                  </a>

                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <Link href="/">Home 1</Link>
                    </li>
                    <li>
                      <Link href="/home-2">Home 2</Link>
                    </li>
                    <li>
                      <Link href="/home-3">Home 3</Link>
                    </li>
                    <li>
                      <Link href="/home-4">Home 4</Link>
                    </li>
                    <li>
                      <Link href="/home-5">Home 5</Link>
                    </li>
                    <li>
                      <a href="home-6.html">Home 6</a>
                    </li>
                    <li>
                      <Link href="/home-7">Home 7</Link>
                    </li>
                    <li>
                      <Link href="/home-8">Home 8</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="submenu-con">
                    Find Job
                    <span className="submenu-indicator">
                      <span className="submenu-indicator-chevron"></span>
                    </span>
                  </a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="job-search-v1.html">Job Search V1</a>
                    </li>
                    <li>
                      <a href="job-search-v2.html">Job Search V2</a>
                    </li>
                    <li>
                      <a href="job-search-v3.html">Job Search V3</a>
                    </li>
                    <li>
                      <a href="job-list-v1.html">Job Search V4</a>
                    </li>
                    <li>
                      <a href="job-list-v2.html">Job Search V5</a>
                    </li>
                    <li>
                      <a href="job-list-v3.html">Job Search V6</a>
                    </li>
                    <li>
                      <a href="#" className="submenu-con">
                        Map Styles
                        <span className="submenu-indicator">
                          <span className="submenu-indicator-chevron"></span>
                        </span>
                      </a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="job-half-map.html">Search On Map V1</a>
                        </li>
                        <li>
                          <a href="job-half-map-v2.html">Search On Map V2</a>
                        </li>
                        <li>
                          <a href="job-search-map-v1.html">Search On Map V3</a>
                        </li>
                        <li>
                          <a href="job-search-map-v2.html">Search On Map V4</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="submenu-con">
                        Single Job
                        <span className="submenu-indicator">
                          <span className="submenu-indicator-chevron"></span>
                        </span>
                      </a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="single-job-1.html">Single Job V1</a>
                        </li>
                        <li>
                          <a href="single-job-2.html">Single Job V2</a>
                        </li>
                        <li>
                          <a href="single-job-3.html">Single Job V3</a>
                        </li>
                        <li>
                          <a href="single-job-4.html">Single Job V4</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="submenu-con">
                    Candidates
                    <span className="submenu-indicator">
                      <span className="submenu-indicator-chevron"></span>
                    </span>
                  </a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="browse-jobs.html">Browse Jobs</a>
                    </li>
                    <li>
                      <a href="browse-resumes.html">Browse Resumes</a>
                    </li>
                    <li>
                      <a href="browse-category.html">Browse Categories</a>
                    </li>
                    <li>
                      <a href="candidate-detail.html">Candidate Detail</a>
                    </li>
                    <li>
                      <a href="candidate-dashboard.html">Candidate Dashboard</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Employers</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="browse-employers.html">Browse Employers V1</a>
                    </li>
                    <li>
                      <a href="browse-employers-list.html">
                        Browse Employers V2
                      </a>
                    </li>
                    <li>
                      <a href="employer-detail.html">Employer Detail</a>
                    </li>
                    <li>
                      <a href="employer-dashboard.html">Employer Dashboard</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="submenu-con">
                    Pages
                    <span className="submenu-indicator">
                      <span className="submenu-indicator-chevron"></span>
                    </span>
                  </a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="blog.html">Blog Style</a>
                    </li>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                    <li>
                      <a href="privacy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="docs.html">Docs</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="nav-menu nav-menu-social align-to-right">
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#login"
                    className="ft-medium"
                  >
                    <i className="lni lni-user mr-2"></i>Sign In
                  </a>
                </li>
                <li className="add-listing bg-success">
                  <a href="dashboard-post-job.html">
                    <i className="lni lni-circle-plus mr-1"></i> Post a Job
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="clearfix"></div>
    </>
  );
};

export default Navbar;
