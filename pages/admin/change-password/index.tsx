import React from "react";
import FooterCredit from "../../../components/Admin/FooterCredit";
import PageHeader from "../../../components/Admin/PageHeader";
import AdminLayout from "../../../layouts/AdminLayout";

const ChangePassword = () => {
  return (
    <>
      <AdminLayout>
        <PageHeader title="Change Password" menu={"Change Password"} />
        <div className="dashboard-widg-bar d-block">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="_dashboard_content bg-white rounded mb-4">
                <div className="_dashboard_content_header br-bottom py-3 px-3">
                  <div className="_dashboard__header_flex">
                    <h4 className="mb-0 ft-medium fs-md">
                      <i className="fa fa-lock mr-1 theme-cl fs-sm"></i>Change
                      Password
                    </h4>
                  </div>
                </div>

                <div className="_dashboard_content_body py-3 px-3">
                  <form className="row">
                    <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">
                          Old Password
                        </label>
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">
                          New Password
                        </label>
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">
                          Confirm Password
                        </label>
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder=""
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

export default ChangePassword;
