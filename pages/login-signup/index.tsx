import React from "react";
import WebsiteLayout from "../../layouts/WebsiteLayout";

const LoginSignup = () => {
  return (
    <>
      <WebsiteLayout>
        <section className="middle">
          <div className="container">
            <div className="row align-items-start justify-content-between">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <form className="border p-3 rounded">
                  <div className="form-group">
                    <label>User Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username*"
                    />
                  </div>

                  <div className="form-group">
                    <label>Password *</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password*"
                    />
                  </div>

                  <div className="form-group">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-1">
                        <input
                          id="dd"
                          className="checkbox-custom"
                          name="dd"
                          type="checkbox"
                        />
                        <label htmlFor="dd" className="checkbox-custom-label">
                          Remember Me
                        </label>
                      </div>
                      <div className="eltio_k2">
                        <a href="#">Lost Your Password?</a>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width theme-bg text-light fs-md ft-medium"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mfliud">
                <form className="border p-3 rounded">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>First Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username*"
                    />
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password*"
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label>Confirm Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password*"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <p>
                      By registering your details, you agree with our Terms
                      &amp; Conditions, and Privacy and Cookie Policy.
                    </p>
                  </div>

                  <div className="form-group">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-1">
                        <input
                          id="ddd"
                          className="checkbox-custom"
                          name="ddd"
                          type="checkbox"
                        />
                        <label htmlFor="ddd" className="checkbox-custom-label">
                          Sign me up for the Newsletter!
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width theme-bg text-light fs-md ft-medium"
                    >
                      Create An Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </WebsiteLayout>
    </>
  );
};

export default LoginSignup;
