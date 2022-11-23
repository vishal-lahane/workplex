import Image from "next/image";
import CompanyLogo from "../../../public/img/c-1.png";
import FooterCredit from "../../../components/Admin/FooterCredit";
import PageHeader from "../../../components/Admin/PageHeader";
import AdminLayout from "../../../layouts/AdminLayout";

const AppliedJobs = () => {
  return (
    <>
      <AdminLayout>
        <PageHeader title="My Applied Jobs" menu={"Applied Jobs"} />
        <div className="dashboard-widg-bar d-block">
          <div className="row">
            <div className="col-xl-12 col-md-12 col-sm-12">
              <div className="cl-justify">
                <div className="cl-justify-first">
                  <p className="m-0 p-0 ft-sm">
                    You have applied{" "}
                    <span className="text-dark ft-medium">26</span> jobs
                  </p>
                </div>

                <div className="cl-justify-last">
                  <div className="d-flex align-items-center justify-content-left">
                    <div className="dlc-list">
                      <select className="form-control sm rounded">
                        <option>All Jobs</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Freelancing</option>
                        <option>Internship</option>
                        <option>Contract</option>
                      </select>
                    </div>
                    <div className="dlc-list ml-2">
                      <select className="form-control sm rounded">
                        <option>Show 20</option>
                        <option>Show 30</option>
                        <option>Show 40</option>
                        <option>Show 50</option>
                        <option>Show 100</option>
                        <option>Show 250</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="mb-4 tbl-lg rounded overflow-hidden">
                <div className="table-responsive bg-white">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Job Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Applied Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="cats-box rounded bg-white d-flex align-items-center">
                            <div className="text-center">
                              <Image
                                src={CompanyLogo}
                                className="img-fluid"
                                width="55"
                                alt=""
                              />
                            </div>
                            <div className="cats-box-caption px-2">
                              <h4 className="fs-md mb-0 ft-medium">
                                Fresher UI/UX Designer (3 Year Exp.)
                              </h4>
                              <div className="d-block mb-2 position-relative">
                                <span className="text-muted medium">
                                  <i className="lni lni-map-marker mr-1"></i>
                                  Liverpool, London
                                </span>
                                <span className="muted medium ml-2 theme-cl">
                                  <i className="lni lni-briefcase mr-1"></i>Full
                                  Time
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-info">Active</span>
                        </td>
                        <td>10 Sep 2021</td>
                        <td>
                          <div className="dash-action">
                            <a
                              href="javascript:void(0);"
                              className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"
                            >
                              <i className="lni lni-eye"></i>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"
                            >
                              <i className="lni lni-trash-can"></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span className="fas fa-arrow-circle-left"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    18
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span className="fas fa-arrow-circle-right"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FooterCredit />
      </AdminLayout>
    </>
  );
};

export default AppliedJobs;
