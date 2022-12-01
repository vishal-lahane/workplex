import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import t2 from "../../public/img/blogs/team-2.webp";
import t3 from "../../public/img/blogs/team-3.webp";
import t5 from "../../public/img/blogs/team-5.webp";

const MultiSlideCarousel = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    touchMove: true,
    swipe: true,
    autoplay: true,
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <button
            type="button"
            data-role="none"
            className="slick-prev slick-arrow"
            aria-label="Previous"
            role="button"
            onClick={sliderRef?.slickPrev}
          >
            Previous
          </button>

          <div aria-live="polite" className="slick-list draggable">
            <Slider ref={setSliderRef} {...sliderSettings}>
              <div
                className="single_review px-2 slick-slide slick-active"
                data-slick-index="-3"
                aria-hidden="false"
                tabIndex={-1}
                style={{ width: "380px" }}
              >
                <div className="reviews_wrap position-relative bg-white rounded py-4 px-4">
                  <div className="rw-header d-flex align-items-center justify-content-start">
                    <div className="rv-110-thumb position-relative verified-author">
                      <Image
                        src={t2}
                        className="img-fluid circle"
                        width="70"
                        alt=""
                      />
                    </div>
                    <div className="rv-110-caption pl-3">
                      <h4 className="ft-medium fs-md mb-0 lh-1">
                        Linda S. Riggs
                      </h4>
                      <p className="p-0 m-0">Project Manager</p>
                    </div>
                  </div>
                  <div className="rw-header d-flex mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="single_review px-2 slick-slide slick-active"
                data-slick-index="-2"
                aria-hidden="false"
                tabIndex={-1}
                style={{ width: "380px" }}
              >
                <div className="reviews_wrap position-relative bg-white rounded py-4 px-4">
                  <div className="rw-header d-flex align-items-center justify-content-start">
                    <div className="rv-110-thumb">
                      <Image
                        src={t5}
                        className="img-fluid circle"
                        width="70"
                        alt=""
                      />
                    </div>
                    <div className="rv-110-caption pl-3">
                      <h4 className="ft-medium fs-md mb-0 lh-1">
                        Chris L. Hazel
                      </h4>
                      <p className="p-0 m-0">Web Designer</p>
                    </div>
                  </div>
                  <div className="rw-header d-flex mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="single_review px-2 slick-slide slick-active"
                data-slick-index="-1"
                aria-hidden="false"
                tabIndex={-1}
                style={{ width: "380px" }}
              >
                <div className="reviews_wrap position-relative bg-white rounded py-4 px-4">
                  <div className="rw-header d-flex align-items-center justify-content-start">
                    <div className="rv-110-thumb position-relative verified-author">
                      <Image
                        src={t3}
                        className="img-fluid circle"
                        width="70"
                        alt=""
                      />
                    </div>
                    <div className="rv-110-caption pl-3">
                      <h4 className="ft-medium fs-md mb-0 lh-1">
                        Mark Jukerberg
                      </h4>
                      <p className="p-0 m-0">PHP Developer</p>
                    </div>
                  </div>
                  <div className="rw-header d-flex mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="single_review px-2 slick-slide"
                data-slick-index="0"
                aria-hidden="true"
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide00"
                style={{ width: "380px" }}
              >
                <div className="reviews_wrap position-relative bg-white rounded py-4 px-4">
                  <div className="rw-header d-flex align-items-center justify-content-start">
                    <div className="rv-110-thumb position-relative verified-author">
                      <Image
                        src={t2}
                        className="img-fluid circle"
                        width="70"
                        alt=""
                      />
                    </div>
                    <div className="rv-110-caption pl-3">
                      <h4 className="ft-medium fs-md mb-0 lh-1">
                        Alvin B. Washington
                      </h4>
                      <p className="p-0 m-0">Co Founder</p>
                    </div>
                  </div>
                  <div className="rw-header d-flex mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="single_review px-2 slick-slide"
                data-slick-index="1"
                aria-hidden="true"
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide01"
                style={{ width: "380px" }}
              >
                <div className="reviews_wrap position-relative bg-white rounded py-4 px-4">
                  <div className="rw-header d-flex align-items-center justify-content-start">
                    <div className="rv-110-thumb">
                      <Image
                        src={t3}
                        className="img-fluid circle"
                        width="70"
                        alt=""
                      />
                    </div>
                    <div className="rv-110-caption pl-3">
                      <h4 className="ft-medium fs-md mb-0 lh-1">
                        Lavera C. Clifford
                      </h4>
                      <p className="p-0 m-0">Team Manager</p>
                    </div>
                  </div>
                  <div className="rw-header d-flex mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="single_review px-2 slick-slide"
                data-slick-index="2"
                aria-hidden="true"
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide02"
                style={{ width: "380px" }}
              >
                <div className="reviews_wrap position-relative bg-white rounded py-4 px-4">
                  <div className="rw-header d-flex align-items-center justify-content-start">
                    <div className="rv-110-thumb position-relative verified-author">
                      <Image
                        src={t5}
                        className="img-fluid circle"
                        width="70"
                        alt=""
                      />
                    </div>
                    <div className="rv-110-caption pl-3">
                      <h4 className="ft-medium fs-md mb-0 lh-1">
                        Linda S. Riggs
                      </h4>
                      <p className="p-0 m-0">Project Manager</p>
                    </div>
                  </div>
                  <div className="rw-header d-flex mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="single_review px-2 slick-slide"
                data-slick-index="3"
                aria-hidden="true"
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide03"
                style={{ width: "380px" }}
              >
                <div className="reviews_wrap position-relative bg-white rounded py-4 px-4">
                  <div className="rw-header d-flex align-items-center justify-content-start">
                    <div className="rv-110-thumb">
                      <Image
                        src={t3}
                        className="img-fluid circle"
                        width="70"
                        alt=""
                      />
                    </div>
                    <div className="rv-110-caption pl-3">
                      <h4 className="ft-medium fs-md mb-0 lh-1">
                        Chris L. Hazel
                      </h4>
                      <p className="p-0 m-0">Web Designer</p>
                    </div>
                  </div>
                  <div className="rw-header d-flex mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="single_review px-2 slick-slide"
                data-slick-index="4"
                aria-hidden="true"
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide04"
                style={{ width: "380px" }}
              >
                <div className="reviews_wrap position-relative bg-white rounded py-4 px-4">
                  <div className="rw-header d-flex align-items-center justify-content-start">
                    <div className="rv-110-thumb position-relative verified-author">
                      <Image
                        src={t5}
                        className="img-fluid circle"
                        width="70"
                        alt=""
                      />
                    </div>
                    <div className="rv-110-caption pl-3">
                      <h4 className="ft-medium fs-md mb-0 lh-1">
                        Mark Jukerberg
                      </h4>
                      <p className="p-0 m-0">PHP Developer</p>
                    </div>
                  </div>
                  <div className="rw-header d-flex mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="single_review px-2 slick-slide "
                data-slick-index="5"
                aria-hidden="true"
                tabIndex={-1}
                style={{ width: "380px" }}
              >
                <div className="reviews_wrap position-relative bg-white rounded py-4 px-4">
                  <div className="rw-header d-flex align-items-center justify-content-start">
                    <div className="rv-110-thumb position-relative verified-author">
                      <Image
                        src={t3}
                        className="img-fluid circle"
                        width="70"
                        alt=""
                      />
                    </div>
                    <div className="rv-110-caption pl-3">
                      <h4 className="ft-medium fs-md mb-0 lh-1">
                        Alvin B. Washington
                      </h4>
                      <p className="p-0 m-0">Co Founder</p>
                    </div>
                  </div>
                  <div className="rw-header d-flex mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="single_review px-2 slick-slide"
                data-slick-index="6"
                aria-hidden="true"
                tabIndex={-1}
                style={{ width: "380px" }}
              >
                <div className="reviews_wrap position-relative bg-white rounded py-4 px-4">
                  <div className="rw-header d-flex align-items-center justify-content-start">
                    <div className="rv-110-thumb">
                      <Image
                        src={t2}
                        className="img-fluid circle"
                        width="70"
                        alt=""
                      />
                    </div>
                    <div className="rv-110-caption pl-3">
                      <h4 className="ft-medium fs-md mb-0 lh-1">
                        Lavera C. Clifford
                      </h4>
                      <p className="p-0 m-0">Team Manager</p>
                    </div>
                  </div>
                  <div className="rw-header d-flex mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="single_review px-2 slick-slide"
                data-slick-index="7"
                aria-hidden="true"
                tabIndex={-1}
                style={{ width: "380px" }}
              >
                <div className="reviews_wrap position-relative bg-white rounded py-4 px-4">
                  <div className="rw-header d-flex align-items-center justify-content-start">
                    <div className="rv-110-thumb position-relative verified-author">
                      <Image
                        src={t5}
                        className="img-fluid circle"
                        width="70"
                        alt=""
                      />
                    </div>
                    <div className="rv-110-caption pl-3">
                      <h4 className="ft-medium fs-md mb-0 lh-1">
                        Linda S. Riggs
                      </h4>
                      <p className="p-0 m-0">Project Manager</p>
                    </div>
                  </div>
                  <div className="rw-header d-flex mt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <button
            type="button"
            data-role="none"
            className="slick-next slick-arrow"
            aria-label="Next"
            role="button"
            onClick={sliderRef?.slickNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default MultiSlideCarousel;
