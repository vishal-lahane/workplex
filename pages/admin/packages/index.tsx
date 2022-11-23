import FooterCredit from "../../../components/Admin/FooterCredit";
import PageHeader from "../../../components/Admin/PageHeader";
import AdminLayout from "../../../layouts/AdminLayout";

const Packages = () => {
  return (
    <>
      <AdminLayout>
        <PageHeader title="Package" menu={"Package"} />
        <div className="dashboard-widg-bar d-block">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="mb-4 tbl-lg rounded overflow-hidden">
                <div className="table-responsive bg-white">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Transaction id</th>
                        <th scope="col">Package Title</th>
                        <th scope="col">Expired</th>
                        <th scope="col">Total Jobs</th>
                        <th scope="col">Used</th>
                        <th scope="col">Remain</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span>01</span>
                        </td>
                        <td>#WKPL12363</td>
                        <td>
                          <a href="javascript:void(0);" className="theme-cl">
                            Silver Pack
                          </a>
                        </td>
                        <td>07 Jan 2021</td>
                        <td>40</td>
                        <td>28</td>
                        <td>12</td>
                        <td>
                          <span className="theme-cl">Active</span>
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

export default Packages;
