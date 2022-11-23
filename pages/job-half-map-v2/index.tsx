import React from "react";
import JobSearchCard from "../../components/JobSearchCard";
import WebsiteLayout from "../../layouts/WebsiteLayout";
import { jobs } from "../../StaticData/homePage";

const JobHalfMapV2 = () => {
  return (
    <>
      <WebsiteLayout>
        <div className="home-map-banner half-map overflow-hidden">
          <div className="fs-left-map-box"></div>
          <div className="fs-inner-container">
            <div className="fs-content">
              <div className="row">
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="cl-justify">
                    <div className="cl-justify-first">
                      <a
                        className="ht-40 d-inline-flex align-items-center justify-content-center px-3 theme-bg text-light rounded"
                        href="#"
                        //   onClick="openSearch()"
                      >
                        <i className="fa fa-sliders-h mr-2"></i>Job Filter
                      </a>
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
              </div>

              <div className="row align-items-center">
                {jobs.map((j) => (
                  <div
                    className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
                    key={j.id}
                  >
                    <JobSearchCard {...j} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="w3-ch-sideBar w3-bar-block w3-card-2 w3-animate-right"
          id="Search"
        >
          <div className="rightMenu-scroll">
            <div className="d-flex align-items-center justify-content-between slide-head py-3 px-3">
              <h4 className="cart_heading fs-md ft-medium mb-0">
                Job Filter Option
              </h4>
              <button className="close_slide">
                <i className="ti-close"></i>
              </button>
            </div>

            <div className="search-inner">
              <div className="filter-search-box px-4 pt-3 pb-0">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by keywords..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location, Zip.."
                  />
                </div>
              </div>

              <div className="filter_wraps">
                <div className="single_search_boxed px-4 pt-0 br-bottom">
                  <div className="widget-boxed-header">
                    <h4>
                      <a
                        href="#categories"
                        className="ft-medium fs-md pb-0"
                        data-toggle="collapse"
                        aria-expanded="true"
                        role="button"
                      >
                        Job Categories
                      </a>
                    </h4>
                  </div>
                  <div
                    className="widget-boxed-body collapse show"
                    id="categories"
                    data-parent="#categories"
                  >
                    <div className="side-list no-border">
                      <div className="single_filter_card">
                        <div className="card-body p-0">
                          <div className="inner_widget_link">
                            <ul className="no-ul-list filter-list">
                              <li>
                                <input
                                  id="a1"
                                  className="checkbox-custom"
                                  name="ADA"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a1"
                                  className="checkbox-custom-label"
                                >
                                  IT Computers (62)
                                </label>
                                <ul className="no-ul-list filter-list">
                                  <li>
                                    <input
                                      id="aa1"
                                      className="checkbox-custom"
                                      name="ADA"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="aa1"
                                      className="checkbox-custom-label"
                                    >
                                      Web Design (31)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="aa2"
                                      className="checkbox-custom"
                                      name="Parking"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="aa2"
                                      className="checkbox-custom-label"
                                    >
                                      Web development (20)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="aa3"
                                      className="checkbox-custom"
                                      name="Coffee"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="aa3"
                                      className="checkbox-custom-label"
                                    >
                                      SEO Services (43)
                                    </label>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <input
                                  id="a2"
                                  className="checkbox-custom"
                                  name="Parking"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a2"
                                  className="checkbox-custom-label"
                                >
                                  Financial Service (16)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="a3"
                                  className="checkbox-custom"
                                  name="Coffee"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a3"
                                  className="checkbox-custom-label"
                                >
                                  Art, Design, Media (22)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="a4"
                                  className="checkbox-custom"
                                  name="Mother"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a4"
                                  className="checkbox-custom-label"
                                >
                                  Coach &amp; Education (21)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="a5"
                                  className="checkbox-custom"
                                  name="Outdoor"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a5"
                                  className="checkbox-custom-label"
                                >
                                  Apps Developements (17)
                                </label>
                                <ul className="no-ul-list filter-list">
                                  <li>
                                    <input
                                      id="ab1"
                                      className="checkbox-custom"
                                      name="ADA"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="ab1"
                                      className="checkbox-custom-label"
                                    >
                                      IOS Development (12)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="ab2"
                                      className="checkbox-custom"
                                      name="Parking"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="ab2"
                                      className="checkbox-custom-label"
                                    >
                                      Android Development (04)
                                    </label>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <input
                                  id="a6"
                                  className="checkbox-custom"
                                  name="Pet"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="a6"
                                  className="checkbox-custom-label"
                                >
                                  Writing &amp; Translation (04)
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single_search_boxed px-4 pt-0 br-bottom">
                  <div className="widget-boxed-header">
                    <h4>
                      <a
                        href="#locations"
                        data-toggle="collapse"
                        aria-expanded="false"
                        role="button"
                        className="ft-medium fs-md pb-0 collapsed"
                      >
                        Job Locations
                      </a>
                    </h4>
                  </div>
                  <div
                    className="widget-boxed-body collapse"
                    id="locations"
                    data-parent="#locations"
                  >
                    <div className="side-list no-border">
                      <div className="single_filter_card">
                        <div className="card-body p-0">
                          <div className="inner_widget_link">
                            <ul className="no-ul-list filter-list">
                              <li>
                                <input
                                  id="b1"
                                  className="checkbox-custom"
                                  name="ADA"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="b1"
                                  className="checkbox-custom-label"
                                >
                                  Australia (21)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="b2"
                                  className="checkbox-custom"
                                  name="Parking"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="b2"
                                  className="checkbox-custom-label"
                                >
                                  New Zeland (12)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="b3"
                                  className="checkbox-custom"
                                  name="Coffee"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="b3"
                                  className="checkbox-custom-label"
                                >
                                  United Kingdom (21)
                                </label>
                                <ul className="no-ul-list filter-list">
                                  <li>
                                    <input
                                      id="ac1"
                                      className="checkbox-custom"
                                      name="ADA"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="ac1"
                                      className="checkbox-custom-label"
                                    >
                                      London (06)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="ac2"
                                      className="checkbox-custom"
                                      name="Parking"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="ac2"
                                      className="checkbox-custom-label"
                                    >
                                      Manchester (07)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="ac3"
                                      className="checkbox-custom"
                                      name="Coffee"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="ac3"
                                      className="checkbox-custom-label"
                                    >
                                      Birmingham (08)
                                    </label>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <input
                                  id="b4"
                                  className="checkbox-custom"
                                  name="Mother"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="b4"
                                  className="checkbox-custom-label"
                                >
                                  United State (04)
                                </label>
                                <ul className="no-ul-list filter-list">
                                  <li>
                                    <input
                                      id="ad1"
                                      className="checkbox-custom"
                                      name="ADA"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="ad1"
                                      className="checkbox-custom-label"
                                    >
                                      New York (32)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="ad2"
                                      className="checkbox-custom"
                                      name="Parking"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="ad2"
                                      className="checkbox-custom-label"
                                    >
                                      Washington (42)
                                    </label>
                                  </li>
                                  <li>
                                    <input
                                      id="ad3"
                                      className="checkbox-custom"
                                      name="Coffee"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="ad3"
                                      className="checkbox-custom-label"
                                    >
                                      Los Angeles (22)
                                    </label>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <input
                                  id="b5"
                                  className="checkbox-custom"
                                  name="Outdoor"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="b5"
                                  className="checkbox-custom-label"
                                >
                                  India (15)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="b6"
                                  className="checkbox-custom"
                                  name="Pet"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="b6"
                                  className="checkbox-custom-label"
                                >
                                  Singapore (09)
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single_search_boxed px-4 pt-0 br-bottom">
                  <div className="widget-boxed-header">
                    <h4>
                      <a
                        href="#skills"
                        data-toggle="collapse"
                        aria-expanded="false"
                        role="button"
                        className="ft-medium fs-md pb-0 collapsed"
                      >
                        Skills
                      </a>
                    </h4>
                  </div>
                  <div
                    className="widget-boxed-body collapse"
                    id="skills"
                    data-parent="#skills"
                  >
                    <div className="side-list no-border">
                      <div className="single_filter_card">
                        <div className="card-body p-0">
                          <div className="inner_widget_link">
                            <ul className="no-ul-list filter-list">
                              <li>
                                <input
                                  id="c1"
                                  className="checkbox-custom"
                                  name="ADA"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="c1"
                                  className="checkbox-custom-label"
                                >
                                  Administrative (15)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="c2"
                                  className="checkbox-custom"
                                  name="Parking"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="c2"
                                  className="checkbox-custom-label"
                                >
                                  iPhone &amp; Android (33)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="c3"
                                  className="checkbox-custom"
                                  name="Coffee"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="c3"
                                  className="checkbox-custom-label"
                                >
                                  Java &amp; AJAX (32)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="c4"
                                  className="checkbox-custom"
                                  name="Mother"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="c4"
                                  className="checkbox-custom-label"
                                >
                                  Account Manager (21)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="c5"
                                  className="checkbox-custom"
                                  name="Outdoor"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="c5"
                                  className="checkbox-custom-label"
                                >
                                  WordPress (32)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="c6"
                                  className="checkbox-custom"
                                  name="Pet"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="c6"
                                  className="checkbox-custom-label"
                                >
                                  Magento (42)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="c7"
                                  className="checkbox-custom"
                                  name="Beauty"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="c7"
                                  className="checkbox-custom-label"
                                >
                                  Shopify (12)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="c8"
                                  className="checkbox-custom"
                                  name="Bike"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="c8"
                                  className="checkbox-custom-label"
                                >
                                  PHP Script (08)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="c9"
                                  className="checkbox-custom"
                                  name="Phone"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="c9"
                                  className="checkbox-custom-label"
                                >
                                  Drupal (32)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="c11"
                                  className="checkbox-custom"
                                  name="Private"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="c11"
                                  className="checkbox-custom-label"
                                >
                                  Joomla (50)
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single_search_boxed px-4 pt-0 br-bottom">
                  <div className="widget-boxed-header">
                    <h4>
                      <a
                        href="#experience"
                        data-toggle="collapse"
                        aria-expanded="false"
                        role="button"
                        className="ft-medium fs-md pb-0 collapsed"
                      >
                        Experience
                      </a>
                    </h4>
                  </div>
                  <div
                    className="widget-boxed-body collapse"
                    id="experience"
                    data-parent="#experience"
                  >
                    <div className="side-list no-border">
                      <div className="single_filter_card">
                        <div className="card-body p-0">
                          <div className="inner_widget_link">
                            <ul className="no-ul-list filter-list">
                              <li>
                                <input
                                  id="d1"
                                  className="checkbox-custom"
                                  name="ADA"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="d1"
                                  className="checkbox-custom-label"
                                >
                                  Beginner (54)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="d2"
                                  className="checkbox-custom"
                                  name="Parking"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="d2"
                                  className="checkbox-custom-label"
                                >
                                  1+ Year (32)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="d3"
                                  className="checkbox-custom"
                                  name="Coffee"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="d3"
                                  className="checkbox-custom-label"
                                >
                                  2 Year (09)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="d4"
                                  className="checkbox-custom"
                                  name="Mother"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="d4"
                                  className="checkbox-custom-label"
                                >
                                  3+ Year (16)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="d5"
                                  className="checkbox-custom"
                                  name="Outdoor"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="d5"
                                  className="checkbox-custom-label"
                                >
                                  4+ Year (17)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="d6"
                                  className="checkbox-custom"
                                  name="Pet"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="d6"
                                  className="checkbox-custom-label"
                                >
                                  5+ Year (22)
                                </label>
                              </li>
                              <li>
                                <input
                                  id="d7"
                                  className="checkbox-custom"
                                  name="Beauty"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="d7"
                                  className="checkbox-custom-label"
                                >
                                  10+ Year (32)
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single_search_boxed px-4 pt-0 br-bottom">
                  <div className="widget-boxed-header">
                    <h4>
                      <a
                        href="#jbtypes"
                        data-toggle="collapse"
                        aria-expanded="false"
                        role="button"
                        className="ft-medium fs-md pb-0 collapsed"
                      >
                        Job Type
                      </a>
                    </h4>
                  </div>
                  <div
                    className="widget-boxed-body collapse"
                    id="jbtypes"
                    data-parent="#jbtypes"
                  >
                    <div className="side-list no-border">
                      <div className="single_filter_card">
                        <div className="card-body p-0">
                          <div className="inner_widget_link">
                            <ul className="no-ul-list filter-list">
                              <li>
                                <input
                                  id="e2"
                                  className="radio-custom"
                                  name="jtype"
                                  type="radio"
                                />
                                <label
                                  htmlFor="e2"
                                  className="radio-custom-label"
                                >
                                  Full time
                                </label>
                              </li>
                              <li>
                                <input
                                  id="e3"
                                  className="radio-custom"
                                  name="jtype"
                                  type="radio"
                                />
                                <label
                                  htmlFor="e3"
                                  className="radio-custom-label"
                                >
                                  Part Time
                                </label>
                              </li>
                              <li>
                                <input
                                  id="e4"
                                  className="radio-custom"
                                  name="jtype"
                                  type="radio"
                                />
                                <label
                                  htmlFor="e4"
                                  className="radio-custom-label"
                                >
                                  Contract Base
                                </label>
                              </li>
                              <li>
                                <input
                                  id="e5"
                                  className="radio-custom"
                                  name="jtype"
                                  type="radio"
                                />
                                <label
                                  htmlFor="e5"
                                  className="radio-custom-label"
                                >
                                  Internship
                                </label>
                              </li>
                              <li>
                                <input
                                  id="e6"
                                  className="radio-custom"
                                  name="jtype"
                                  type="radio"
                                />
                                <label
                                  htmlFor="e6"
                                  className="radio-custom-label"
                                >
                                  Regular
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single_search_boxed px-4 pt-0 br-bottom">
                  <div className="widget-boxed-header">
                    <h4>
                      <a
                        href="#jblevel"
                        data-toggle="collapse"
                        aria-expanded="false"
                        role="button"
                        className="ft-medium fs-md pb-0 collapsed"
                      >
                        Job Level
                      </a>
                    </h4>
                  </div>
                  <div
                    className="widget-boxed-body collapse"
                    id="jblevel"
                    data-parent="#jblevel"
                  >
                    <div className="side-list no-border">
                      <div className="single_filter_card">
                        <div className="card-body p-0">
                          <div className="inner_widget_link">
                            <ul className="no-ul-list filter-list">
                              <li>
                                <input
                                  id="f1"
                                  className="checkbox-custom"
                                  name="ADA"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="f1"
                                  className="checkbox-custom-label"
                                >
                                  Team Leader
                                </label>
                              </li>
                              <li>
                                <input
                                  id="f2"
                                  className="checkbox-custom"
                                  name="Parking"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="f2"
                                  className="checkbox-custom-label"
                                >
                                  Manager
                                </label>
                              </li>
                              <li>
                                <input
                                  id="f3"
                                  className="checkbox-custom"
                                  name="Coffee"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="f3"
                                  className="checkbox-custom-label"
                                >
                                  Junior
                                </label>
                              </li>
                              <li>
                                <input
                                  id="f4"
                                  className="checkbox-custom"
                                  name="Coffee"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="f4"
                                  className="checkbox-custom-label"
                                >
                                  Senior
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single_search_boxed px-4 pt-0">
                  <div className="widget-boxed-header">
                    <h4>
                      <a
                        href="#salary"
                        data-toggle="collapse"
                        aria-expanded="false"
                        role="button"
                        className="ft-medium fs-md pb-0 collapsed"
                      >
                        Expected Salary
                      </a>
                    </h4>
                  </div>
                  <div
                    className="widget-boxed-body collapse"
                    id="salary"
                    data-parent="#salary"
                  >
                    <div className="side-list no-border">
                      <div className="single_filter_card">
                        <div className="card-body p-0">
                          <div className="inner_widget_link">
                            <ul className="no-ul-list filter-list">
                              <li>
                                <input
                                  id="g1"
                                  className="checkbox-custom"
                                  name="ADA"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="g1"
                                  className="checkbox-custom-label"
                                >
                                  $120k - $140k PA
                                </label>
                              </li>
                              <li>
                                <input
                                  id="g2"
                                  className="checkbox-custom"
                                  name="Parking"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="g2"
                                  className="checkbox-custom-label"
                                >
                                  $140k - $150k PA
                                </label>
                              </li>
                              <li>
                                <input
                                  id="g3"
                                  className="checkbox-custom"
                                  name="Coffee"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="g3"
                                  className="checkbox-custom-label"
                                >
                                  $150k - $170k PA
                                </label>
                              </li>
                              <li>
                                <input
                                  id="g4"
                                  className="checkbox-custom"
                                  name="Mother"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="g4"
                                  className="checkbox-custom-label"
                                >
                                  $170k - $190k PA
                                </label>
                              </li>
                              <li>
                                <input
                                  id="g5"
                                  className="checkbox-custom"
                                  name="Outdoor"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="g5"
                                  className="checkbox-custom-label"
                                >
                                  $200k - $250k PA
                                </label>
                              </li>
                              <li>
                                <input
                                  id="g6"
                                  className="checkbox-custom"
                                  name="Pet"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="g6"
                                  className="checkbox-custom-label"
                                >
                                  $250k - $300k PA
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group filter_button pt-2 pb-4 px-4">
                <button
                  type="submit"
                  className="btn btn-md theme-bg text-light rounded full-width"
                >
                  22 Results Show
                </button>
              </div>
            </div>
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default JobHalfMapV2;
