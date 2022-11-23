import FooterCredit from "../../../components/Admin/FooterCredit";
import PageHeader from "../../../components/Admin/PageHeader";
import AdminLayout from "../../../layouts/AdminLayout";

const ManageResumes = () => {
  return (
    <>
      <AdminLayout>
        <PageHeader title="Manage Resumes" menu={"Manage Resumes"} />
        <div className="dashboard-widg-bar d-block">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="mb-4 tbl-lg rounded overflow-hidden">
                <div className="table-responsive bg-white">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Location</th>
                        <th scope="col">Posted Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="dash-title">
                            <h4 className="mb-0 ft-medium fs-sm">
                              John K. Surber
                            </h4>
                          </div>
                        </td>
                        <td>
                          <span className="ft-medium">UI/UX Designer</span>
                        </td>
                        <td>California, USA</td>
                        <td>12 Nov 2021</td>
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
                              className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                            >
                              <i className="lni lni-pencil"></i>
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
                      <tr>
                        <td>
                          <div className="dash-title">
                            <h4 className="mb-0 ft-medium fs-sm">
                              Loretta E. Reyes
                            </h4>
                          </div>
                        </td>
                        <td>
                          <span className="ft-medium">PHP Developer</span>
                        </td>
                        <td>Liverpool, CA</td>
                        <td>12 Dec 2021</td>
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
                              className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                            >
                              <i className="lni lni-pencil"></i>
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
                      <tr>
                        <td>
                          <div className="dash-title">
                            <h4 className="mb-0 ft-medium fs-sm">
                              Adam B. Johnston
                            </h4>
                          </div>
                        </td>
                        <td>
                          <span className="ft-medium">IOS Developer</span>
                        </td>
                        <td>Mailbourn, AU</td>
                        <td>20 Nov 2021</td>
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
                              className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                            >
                              <i className="lni lni-pencil"></i>
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
                      <tr>
                        <td>
                          <div className="dash-title">
                            <h4 className="mb-0 ft-medium fs-sm">
                              Jessica G. Leininger
                            </h4>
                          </div>
                        </td>
                        <td>
                          <span className="ft-medium">Content Writer</span>
                        </td>
                        <td>Denver, USA</td>
                        <td>20 Dec 2021</td>
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
                              className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                            >
                              <i className="lni lni-pencil"></i>
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
                      <tr>
                        <td>
                          <div className="dash-title">
                            <h4 className="mb-0 ft-medium fs-sm">
                              Julie D. Morales
                            </h4>
                          </div>
                        </td>
                        <td>
                          <span className="ft-medium">Product Designer</span>
                        </td>
                        <td>London, UK</td>
                        <td>12 Jan 2021</td>
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
                              className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                            >
                              <i className="lni lni-pencil"></i>
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
                      <tr>
                        <td>
                          <div className="dash-title">
                            <h4 className="mb-0 ft-medium fs-sm">
                              Samantha D. Hebert
                            </h4>
                          </div>
                        </td>
                        <td>
                          <span className="ft-medium">UI/UX Designer</span>
                        </td>
                        <td>California</td>
                        <td>22 Dec 2021</td>
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
                              className="p-2 circle text-success bg-light-success d-inline-flex align-items-center justify-content-center"
                            >
                              <i className="lni lni-pencil"></i>
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
        </div>
        <FooterCredit />
      </AdminLayout>
    </>
  );
};

export default ManageResumes;
