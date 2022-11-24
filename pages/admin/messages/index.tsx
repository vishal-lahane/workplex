import Image from "next/image";
import FooterCredit from "../../../components/Admin/FooterCredit";
import PageHeader from "../../../components/Admin/PageHeader";
import AdminLayout from "../../../layouts/AdminLayout";
import t2 from "../../../public/img/blogs/team-2.webp";
import t3 from "../../../public/img/blogs/team-3.webp";
import t5 from "../../../public/img/blogs/team-5.webp";

const Messages = () => {
  return (
    <>
      <AdminLayout>
        <PageHeader title="Messages" menu={"Messages"} />
        <div className="dashboard-widg-bar d-block">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="_dashboard_content bg-white rounded mb-4">
                <div className="_dashboard_content_body">
                  <div className="messages-container margin-top-0">
                    <div className="messages-headline">
                      <h4>Connor Griffin</h4>
                      <a href="#" className="message-action">
                        <i className="ti-trash"></i> Delete Conversation
                      </a>
                    </div>

                    <div className="messages-container-inner">
                      <div className="dash-msg-inbox">
                        <ul>
                          <li>
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t2} alt="" />
                                <span className="_user_status online"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>Tilly Bartlett</h5>
                                  <span>36 min ago</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year.. </p>
                              </div>
                            </a>
                          </li>

                          <li className="active-message">
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t3} alt="" />
                                <span className="_user_status offline"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>George Howarth</h5>
                                  <span>2 hours ago</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year..</p>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t5} alt="" />
                                <span className="_user_status busy"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>Harriet Ball</h5>
                                  <span>Yesterday</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year..</p>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t2} alt="" />
                                <span className="_user_status online"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>Sienna Bruce</h5>
                                  <span>02.01.2020</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year..</p>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t3} alt="" />
                                <span className="_user_status busy"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>Leo Stewart</h5>
                                  <span>03.01.2020</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year..</p>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t5} alt="" />
                                <span className="_user_status online"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>Shaurya Preet</h5>
                                  <span>05.01.2020</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year..</p>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t2} alt="" />
                                <span className="_user_status offline"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>Dan Preet</h5>
                                  <span>04.01.2020</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year..</p>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t3} alt="" />
                                <span className="_user_status online"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>Maddison</h5>
                                  <span>31.05.2019</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year..</p>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t5} alt="" />
                                <span className="_user_status busy"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>Maddison</h5>
                                  <span>27.05.2019</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year..</p>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t2} alt="" />
                                <span className="_user_status busy"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>Eleanor Lloyd</h5>
                                  <span>24.05.2019</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year..</p>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t3} alt="" />
                                <span className="_user_status offline"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>Anna Curtis</h5>
                                  <span>05.01.2020</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year..</p>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <div className="dash-msg-avatar">
                                <Image src={t5} alt="" />
                                <span className="_user_status online"></span>
                              </div>

                              <div className="message-by">
                                <div className="message-by-headline">
                                  <h5>Tyler Fraser</h5>
                                  <span>07.01.2020</span>
                                </div>
                                <p>Hello, I am a web designer with 5 year..</p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="dash-msg-content">
                        <div className="message-plunch">
                          <div className="dash-msg-avatar">
                            <Image src={t2} alt="" />
                          </div>
                          <div className="dash-msg-text">
                            <p>
                              Hello, Contrary to popular belief, Lorem Ipsum is
                              not simply random text. It has roots in a piece of
                              classNameical Latin
                            </p>
                          </div>
                        </div>

                        <div className="message-plunch me">
                          <div className="dash-msg-avatar">
                            <Image src={t5} alt="" />
                          </div>
                          <div className="dash-msg-text">
                            <p>
                              looked up one of the more obscure Latin words,
                              consectetur, from a Lorem
                            </p>
                          </div>
                        </div>

                        <div className="message-plunch">
                          <div className="dash-msg-avatar">
                            <Image src={t2} alt="" />
                          </div>
                          <div className="dash-msg-text">
                            <p>
                              If you are going to use a passage of Lorem Ipsum,
                              you need to be sure there isn&apos;t anything
                              embarrassing
                            </p>
                          </div>
                        </div>

                        <div className="message-plunch me">
                          <div className="dash-msg-avatar">
                            <Image src={t5} alt="" />
                          </div>
                          <div className="dash-msg-text">
                            <p>
                              please consider donating a small sum to help pay
                              for the hosting and bandwidth bill.
                            </p>
                          </div>
                        </div>

                        <div className="message-plunch">
                          <div className="dash-msg-avatar">
                            <Image src={t2} alt="" />
                          </div>
                          <div className="dash-msg-text">
                            <p>
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore
                            </p>
                          </div>
                        </div>

                        <div className="message-plunch me">
                          <div className="dash-msg-avatar">
                            <Image src={t5} alt="" />
                          </div>
                          <div className="dash-msg-text">
                            <p>
                              numquam eius modi tempora incidunt ut labore et
                              dolore magnam aliquam quaerat voluptatem.
                            </p>
                          </div>
                        </div>

                        <div className="message-plunch">
                          <div className="dash-msg-avatar">
                            <Image src={t2} alt="" />
                          </div>
                          <div className="dash-msg-text">
                            <p>
                              But I must explain to you how all this mistaken
                              idea of denouncing pleasure
                            </p>
                          </div>
                        </div>

                        <div className="clearfix"></div>
                        <div className="message-reply">
                          <textarea
                            className="form-control with-light"
                            placeholder="Your Message"
                          ></textarea>
                          <button
                            type="submit"
                            className="btn theme-bg text-white"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Messages;
