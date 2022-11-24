import FooterCredit from "../../../components/Admin/FooterCredit";
import PageHeader from "../../../components/Admin/PageHeader";
import AdminLayout from "../../../layouts/AdminLayout";

const AlertJobs = () => {
  return (
    <>
      <AdminLayout>
        <PageHeader title="My Alert Jobs" menu={"Alert Jobs"} />
        <div className="dashboard-widg-bar d-block">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="mb-4 tbl-lg rounded overflow-hidden">
                <div className="table-responsive bg-white">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Posted Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="dash-title">
                            <h4 className="mb-0 ft-medium fs-sm">
                              Senior Web Developer
                            </h4>
                            <div className="jbl_location">
                              <i className="lni lni-map-marker mr-1"></i>
                              <span>San Francisco</span>
                            </div>
                          </div>
                        </td>
                        <td>Manager</td>
                        <td>10 Sep 2021</td>
                        <td>
                          <div className="dash-action">
                            <a
                              href="#"
                              className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"
                            >
                              <i className="lni lni-eye"></i>
                            </a>
                            <a
                              href="#"
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

export default AlertJobs;
