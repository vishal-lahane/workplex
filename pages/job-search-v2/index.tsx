import { useEffect, useState } from "react";
import JobSearchGridView from "../../components/JobSearchGridView";
import JobSearchListView from "../../components/JobSearchListView";

const JobSearchV2 = () => {
  const [jobGridView, setJobGridView] = useState<boolean>(true);
  const [gridViewActive, setGridViewActive] = useState<boolean>(true);
  const [listViewActive, setListViewActive] = useState<boolean>(false);

  const [topFixed, setTopFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setTopFixed(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={
          topFixed
            ? "py-3 theme-bg searchingBar fixedSearching"
            : "py-3 theme-bg searchingBar"
        }
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-7 col-lg-9 col-md-9 col-sm-12 col-12">
              <form className="bg-white rounded p-1 border">
                <div className="row no-gutters">
                  <div className="col-xl-6 col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control sm left-ico"
                        placeholder="Job Title, Keyword or Company"
                      />
                      <i className="bnc-ico lni lni-search-alt"></i>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control sm left-ico"
                        placeholder="Location or Zip Code"
                      />
                      <i className="bnc-ico lni lni-target"></i>
                    </div>
                  </div>
                  <div className="col-xl-1 col-lg-2 col-md-2 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <button
                        className="btn full-width custom-height sm rounded bg-dark text-white fs-md"
                        type="button"
                      >
                        Go
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="d-block position-relative text-right">
                <a
                  href="#"
                  className="mlb-btn btn ft-medium rounded text-dark bg-light"
                >
                  <i className="ti-bell mr-1"></i>Job Alert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-light middle">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="row align-items-center justify-content-between mx-0 bg-white rounded py-2 mb-4">
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                  <h6 className="mb-0 ft-medium fs-sm">302 New Jobs Found</h6>
                </div>

                <div className="col-xl-9 col-lg-8 col-md-7 col-sm-12">
                  <div className="filter_wraps elspo_wrap d-flex align-items-center justify-content-end">
                    <div className="single_fitres mr-2 br-right">
                      <select
                        className="custom-select simple"
                        defaultValue={"1"}
                      >
                        <option value="1">Default Sorting</option>
                        <option value="2">Recent jobs</option>
                        <option value="3">Featured jobs</option>
                        <option value="4">Trending Jobs</option>
                        <option value="5">Premium jobs</option>
                      </select>
                    </div>
                    <div className="single_fitres">
                      <a
                        href="#"
                        onClick={() => {
                          setJobGridView(true);
                          setGridViewActive(true);
                          setListViewActive(false);
                        }}
                        className={
                          gridViewActive
                            ? "simple-button active theme-cl mr-1"
                            : "simple-button mr-1"
                        }
                      >
                        <i className="ti-layout-grid2"></i>
                      </a>
                      <a
                        href="#"
                        className={
                          listViewActive
                            ? "simple-button active theme-cl"
                            : "simple-button"
                        }
                        onClick={() => {
                          setJobGridView(false);
                          setGridViewActive(false);
                          setListViewActive(true);
                        }}
                      >
                        <i className="ti-view-list"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {jobGridView ? <JobSearchGridView /> : <JobSearchListView />}

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
      </section>
    </>
  );
};

export default JobSearchV2;
