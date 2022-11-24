import FooterCredit from "../../../components/Admin/FooterCredit";
import PageHeader from "../../../components/Admin/PageHeader";
import AdminLayout from "../../../layouts/AdminLayout";

const CreateResume = () => {
  return (
    <>
      <AdminLayout>
        <PageHeader title="Add Resume" menu="Add Resume" />
        <div className="dashboard-widg-bar d-block">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="_dashboard_content bg-white rounded mb-4">
                <div className="_dashboard_content_header br-bottom py-3 px-3">
                  <div className="_dashboard__header_flex">
                    <h4 className="mb-0 ft-medium fs-md">
                      <i className="fa fa-file mr-1 theme-cl fs-sm"></i>Create
                      Resume
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
                              Your Name
                            </label>
                            <input
                              type="text"
                              className="form-control rounded"
                              placeholder="Full Name"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Professional Title
                            </label>
                            <input
                              type="text"
                              className="form-control rounded"
                              placeholder="e.g. Web Designer"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Job category
                            </label>
                            <select className="form-control rounded">
                              <option>Banking</option>
                              <option>Hospital</option>
                              <option>It Services</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">Email</label>
                            <input
                              type="email"
                              className="form-control rounded"
                              placeholder="uppcl@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Resume Content
                            </label>
                            <textarea
                              className="form-control with-light"
                              placeholder="Resume Content"
                            ></textarea>
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
                      <i className="fas fa-graduation-cap mr-1 theme-cl fs-sm"></i>
                      Education Details
                    </h4>
                  </div>
                </div>

                <div className="_dashboard_content_body py-3 px-3">
                  <form className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="gray rounded p-3 mb-3 position-relative">
                        <button className="aps-clone">
                          <i className="fas fa-times"></i>
                        </button>
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            School Name
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="School Name"
                          />
                        </div>
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Qualification
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Qualification Title"
                          />
                        </div>
                        <div className="form-row">
                          <div className="col-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Start Date
                              </label>
                              <input
                                type="date"
                                className="form-control rounded"
                                placeholder="dd-mm-yyyy"
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                End Date
                              </label>
                              <input
                                type="date"
                                className="form-control rounded"
                                placeholder="dd-mm-yyyy"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="text-dark ft-medium">Note</label>
                          <textarea
                            className="form-control ht-80"
                            placeholder="Note Optional"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn gray ft-medium apply-btn fs-sm rounded"
                        >
                          <i className="fas fa-plus mr-1"></i>Add Education
                        </button>
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
                      <i className="fas fa-graduation-cap mr-1 theme-cl fs-sm"></i>
                      Experience Details
                    </h4>
                  </div>
                </div>

                <div className="_dashboard_content_body py-3 px-3">
                  <form className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="gray rounded p-3 mb-3 position-relative">
                        <button className="aps-clone">
                          <i className="fas fa-times"></i>
                        </button>
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Employer
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Employer Name"
                          />
                        </div>
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Job Title
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Designation Title"
                          />
                        </div>
                        <div className="form-row">
                          <div className="col-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                Start Date
                              </label>
                              <input
                                type="date"
                                className="form-control rounded"
                                placeholder="dd-mm-yyyy"
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group">
                              <label className="text-dark ft-medium">
                                End Date
                              </label>
                              <input
                                type="date"
                                className="form-control rounded"
                                placeholder="dd-mm-yyyy"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="text-dark ft-medium">Note</label>
                          <textarea
                            className="form-control ht-80"
                            placeholder="Note Optional"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn gray ft-medium apply-btn fs-sm rounded"
                        >
                          <i className="fas fa-plus mr-1"></i>Add Experience
                        </button>
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
                      <i className="fas fa-graduation-cap mr-1 theme-cl fs-sm"></i>
                      Skills Details
                    </h4>
                  </div>
                </div>

                <div className="_dashboard_content_body py-3 px-3">
                  <form className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="gray rounded p-3 mb-3 position-relative">
                        <button className="aps-clone">
                          <i className="fas fa-times"></i>
                        </button>
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Skills Name
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Skills Name"
                          />
                        </div>
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Percentage
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="e.x. 80%"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn gray ft-medium apply-btn fs-sm rounded"
                        >
                          <i className="fas fa-plus mr-1"></i>Add Skills
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <button
                type="submit"
                className="btn btn-md ft-medium text-light rounded theme-bg"
              >
                Save &amp; Preview
              </button>
            </div>
          </div>
        </div>
        <FooterCredit />
      </AdminLayout>
    </>
  );
};

export default CreateResume;
