import Image from "next/image";
import Logo from "../public/img/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="light-footer skin-light-footer style-2">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="footer_widget">
                  <Image
                    src={Logo}
                    style={{ height: "auto" }}
                    className="img-footer small mb-2"
                    alt=""
                  />

                  <div className="address mt-2">
                    3298 Grant Street Longview, New Texox
                    <br />
                    United Kingdom 75601
                  </div>
                  <div className="address mt-3">
                    1-202-555-0106
                    <br />
                    support@workplex.com
                  </div>
                  <div className="address mt-2">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-twitter-filled"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-youtube"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-instagram-filled"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">For Employers</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="#">Explore Candidates</a>
                    </li>
                    <li>
                      <a href="#">Job Pricing</a>
                    </li>
                    <li>
                      <a href="#">Submit Job</a>
                    </li>
                    <li>
                      <a href="#">Shortlisted</a>
                    </li>
                    <li>
                      <a href="#">Dashboard</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">For Candidates</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="#">Explore All Jobs</a>
                    </li>
                    <li>
                      <a href="#">Browse Categories</a>
                    </li>
                    <li>
                      <a href="#">Saved Jobs</a>
                    </li>
                    <li>
                      <a href="#">Dashboard</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">About Company</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="#">Who We&apos;r?</a>
                    </li>
                    <li>
                      <a href="#">Our Mission</a>
                    </li>
                    <li>
                      <a href="#">Our team</a>
                    </li>
                    <li>
                      <a href="#">Packages</a>
                    </li>
                    <li>
                      <a href="#">Dashboard</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">Helpful Topics</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="#">Site Map</a>
                    </li>
                    <li>
                      <a href="#">Security</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">FAQ&apos;s Page</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom br-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <p className="mb-0">
                  © 2022 Workplex. Designd By{" "}
                  <a href="https://themezhub.com">ThemezHub</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
