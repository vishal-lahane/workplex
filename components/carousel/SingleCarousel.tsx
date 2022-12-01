import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import t2 from "../../public/img/blogs/team-2.webp";
import t3 from "../../public/img/blogs/team-3.webp";
import t5 from "../../public/img/blogs/team-5.webp";

const SingleCarousel = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);
  const sliderSettings = {
    slidesToShow: 1,
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
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
          <div className="reviews-slide px-3 slick-initialized slick-slider">
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
            <Slider ref={setSliderRef} {...sliderSettings}>
              <div
                className="single_review slick-slide slick-cloned p-4"
                data-slick-index="-1"
                aria-hidden="true"
                tabIndex={-1}
                style={{ width: "838px" }}
              >
                <div className="sng_rev_thumb">
                  <figure>
                    <Image src={t2} className="img-fluid circle" alt="" />
                  </figure>
                </div>
                <div className="sng_rev_caption text-center">
                  <div className="rev_desc mb-4">
                    <p className="fs-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                  </div>
                  <div className="rev_author">
                    <h4 className="mb-0">Madhu Sharma</h4>
                    <span className="fs-sm">Team Manager</span>
                  </div>
                </div>
              </div>
              <div
                className="single_review slick-slide p-4"
                data-slick-index="0"
                aria-hidden="true"
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide00"
                style={{ width: "838px" }}
              >
                <div className="sng_rev_thumb">
                  <figure>
                    <Image src={t3} className="img-fluid circle" alt="" />
                  </figure>
                </div>
                <div className="sng_rev_caption text-center">
                  <div className="rev_desc mb-4">
                    <p className="fs-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                  </div>
                  <div className="rev_author">
                    <h4 className="mb-0">Mark Jevenue</h4>
                    <span className="fs-sm">CEO of Addle</span>
                  </div>
                </div>
              </div>
              <div
                className="single_review slick-slide p-4"
                data-slick-index="1"
                aria-hidden="true"
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide01"
                style={{ width: "838px" }}
              >
                <div className="sng_rev_thumb">
                  <figure>
                    <Image src={t5} className="img-fluid circle" alt="" />
                  </figure>
                </div>
                <div className="sng_rev_caption text-center">
                  <div className="rev_desc mb-4">
                    <p className="fs-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                  </div>
                  <div className="rev_author">
                    <h4 className="mb-0">Henna Bajaj</h4>
                    <span className="fs-sm">Aqua Founder</span>
                  </div>
                </div>
              </div>
              <div
                className="single_review slick-slide p-4"
                data-slick-index="2"
                aria-hidden="true"
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide02"
                style={{ width: "838px" }}
              >
                <div className="sng_rev_thumb">
                  <figure>
                    <Image src={t3} className="img-fluid circle" alt="" />
                  </figure>
                </div>
                <div className="sng_rev_caption text-center">
                  <div className="rev_desc mb-4">
                    <p className="fs-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                  </div>
                  <div className="rev_author">
                    <h4 className="mb-0">John Cenna</h4>
                    <span className="fs-sm">CEO of Plike</span>
                  </div>
                </div>
              </div>
              <div
                className="single_review slick-slide p-4"
                data-slick-index="3"
                aria-hidden="false"
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide03"
                style={{ width: "838px" }}
              >
                <div className="sng_rev_thumb">
                  <figure>
                    <Image src={t2} className="img-fluid circle" alt="" />
                  </figure>
                </div>
                <div className="sng_rev_caption text-center">
                  <div className="rev_desc mb-4">
                    <p className="fs-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                  </div>
                  <div className="rev_author">
                    <h4 className="mb-0">Madhu Sharma</h4>
                    <span className="fs-sm">Team Manager</span>
                  </div>
                </div>
              </div>
              <div
                className="single_review slick-slide p-4"
                data-slick-index="4"
                aria-hidden="true"
                tabIndex={-1}
                style={{ width: "838px" }}
              >
                <div className="sng_rev_thumb">
                  <figure>
                    <Image src={t5} className="img-fluid circle" alt="" />
                  </figure>
                </div>
                <div className="sng_rev_caption text-center">
                  <div className="rev_desc mb-4">
                    <p className="fs-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                  </div>
                  <div className="rev_author">
                    <h4 className="mb-0">Mark Jevenue</h4>
                    <span className="fs-sm">CEO of Addle</span>
                  </div>
                </div>
              </div>
            </Slider>

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
      </div>
    </>
  );
};

export default SingleCarousel;
