import FooterCredit from "../../../components/Admin/FooterCredit";
import PageHeader from "../../../components/Admin/PageHeader";
import AdminLayout from "../../../layouts/AdminLayout";

const Profile = () => {
  return (
    <>
      <AdminLayout>
        <PageHeader title="My Profile" menu={"My Profile"} />
        <div className="dashboard-widg-bar d-block">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="_dashboard_content bg-white rounded mb-4">
                <div className="_dashboard_content_header br-bottom py-3 px-3">
                  <div className="_dashboard__header_flex">
                    <h4 className="mb-0 ft-medium fs-md">
                      <i className="fa fa-user mr-1 theme-cl fs-sm"></i>My
                      Account
                    </h4>
                  </div>
                </div>

                <div className="_dashboard_content_body py-3 px-3">
                  <form className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                      <div className="custom-file avater_uploads">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFile"
                        >
                          <i className="fa fa-user"></i>
                        </label>
                      </div>
                    </div>

                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control rounded"
                              value="Full Name"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Job Title
                            </label>
                            <input
                              type="text"
                              className="form-control rounded"
                              value="Job Name"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">Phone</label>
                            <input
                              type="text"
                              className="form-control rounded"
                              value="Phone"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">Email</label>
                            <input
                              type="email"
                              className="form-control rounded"
                              value="uppcl@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Job Type
                            </label>
                            <select className="custom-select rounded">
                              <option>Choose Job Type</option>
                              <option>Full Time</option>
                              <option>Part Time</option>
                              <option>Freelance</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Job Category
                            </label>
                            <select className="custom-select rounded">
                              <option>Choose Categories</option>
                              <option>IT &amp; Software</option>
                              <option>Bank Services</option>
                              <option>Hospitals</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Experience
                            </label>
                            <select className="custom-select rounded">
                              <option>Select Experience</option>
                              <option>Begginer</option>
                              <option>01 Years</option>
                              <option>02 Years</option>
                              <option>03 Years</option>
                              <option>04 Years</option>
                              <option>05 Years</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Education
                            </label>
                            <input
                              type="text"
                              className="form-control rounded"
                              value="Education"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Current Salary
                            </label>
                            <select className="custom-select rounded">
                              <option>10-20 K</option>
                              <option>20-30 K</option>
                              <option>30-40 K</option>
                              <option>40-50 K</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Expected Salary
                            </label>
                            <select className="custom-select rounded">
                              <option>10-20 K</option>
                              <option>20-30 K</option>
                              <option>30-40 K</option>
                              <option>40-50 K</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">Age</label>
                            <select className="custom-select rounded">
                              <option>20 Years+</option>
                              <option>23+ Years</option>
                              <option>25+ Years</option>
                              <option>30+ Years</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Language
                            </label>
                            <input
                              type="email"
                              className="form-control rounded"
                              value="e.x Englisg, Hindi"
                            />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              About Info
                            </label>
                            <textarea className="form-control with-light">
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepturi
                            </textarea>
                          </div>
                        </div>

                        <div className="col-xl-12 col-lg-12">
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-md ft-medium text-light rounded theme-bg"
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="_dashboard_content bg-white rounded mb-4">
                <div className="_dashboard_content_header br-bottom py-3 px-3">
                  <div className="_dashboard__header_flex">
                    <h4 className="mb-0 ft-medium fs-md">
                      <i className="ti-facebook mr-1 theme-cl fs-sm"></i>Social
                      Accounts
                    </h4>
                  </div>
                </div>

                <div className="_dashboard_content_body py-3 px-3">
                  <form className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label className="text-dark ft-medium">Facebook</label>
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder="https://www.facebook.com/"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label className="text-dark ft-medium">Twitter</label>
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder="https://www.twitter.com/"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label className="text-dark ft-medium">LinkedIn</label>
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder="https://www.linkedin.com/"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label className="text-dark ft-medium">
                          GooglePlus
                        </label>
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder="https://www.gplus.com/"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-md ft-medium text-light rounded theme-bg"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="_dashboard_content bg-white rounded mb-4">
                <div className="_dashboard_content_header br-bottom py-3 px-3">
                  <div className="_dashboard__header_flex">
                    <h4 className="mb-0 ft-medium fs-md">
                      <i className="fas fa-lock mr-1 theme-cl fs-sm"></i>Contact
                      Information
                    </h4>
                  </div>
                </div>

                <div className="_dashboard_content_body py-3 px-3">
                  <form className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">Country</label>
                        <select className="custom-select rounded">
                          <option>Australia</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>China</option>
                          <option>India</option>
                          <option>Pakistan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">City</label>
                        <select className="custom-select rounded">
                          <option>Madhya Pradesh</option>
                          <option>Punjab</option>
                          <option>Uttar Pradesh</option>
                          <option>Arudachal</option>
                          <option>Nepal</option>
                          <option>Afganistan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">
                          Full Address
                        </label>
                        <input
                          type="password"
                          className="form-control rounded"
                          placeholder="#10 Marke Juger, SBI Road"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">Latitude</label>
                        <input
                          type="password"
                          className="form-control rounded"
                          placeholder="#10 Marke Juger, SBI Road"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">Longitude</label>
                        <input
                          type="password"
                          className="form-control rounded"
                          placeholder="#10 Marke Juger, SBI Road"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-md ft-medium text-light rounded theme-bg"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterCredit />
      </AdminLayout>
    </>
  );
};

export default Profile;
