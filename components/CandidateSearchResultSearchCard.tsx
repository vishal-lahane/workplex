import Image from "next/image";
import Link from "next/link";
import { CandidateCard } from "../Models/DataTypes";
import t2 from "../public/img/blogs/team-2.webp";

const CandidateSearchResultSearchCard = ({ name }: CandidateCard) => {
  return (
    <>
      <div className="job_grid border rounded ">
        <div className="position-absolute ab-left">
          <button
            type="button"
            className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
          >
            <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
          </button>
        </div>
        <div className="job_grid_thumbmb-2 text-center pt-4 px-3 mb-2">
          <a
            href="candidate-detail.html"
            className="d-inline-flex text-center m-auto circle border p-2"
          >
            <Image src={t2} className="img-fluid circle" width="70" alt="" />
          </a>
        </div>
        <div className="job_grid_caption text-center pb-3 px-3">
          <h4 className="mb-0 ft-medium medium">
            <a href="candidate-detail.html" className="text-dark fs-md">
              {name}
            </a>
          </h4>
          <div className="jbl_location">
            <i className="lni lni-map-marker mr-1"></i>
            <span>San Francisco</span>
          </div>
        </div>
        <div className="job_grid_footer px-3">
          <ul className="p-0 skills_tag text-center">
            <li>
              <span className="px-2 py-1 medium skill-bg rounded text-dark">
                Joomla
              </span>
            </li>
            <li>
              <span className="px-2 py-1 medium skill-bg rounded text-dark">
                WordPress
              </span>
            </li>
            <li>
              <span className="px-2 py-1 medium skill-bg rounded text-dark">
                Javascript
              </span>
            </li>
            <li>
              <span className="px-2 py-1 medium skill-bg rounded text-dark">
                PHP
              </span>
            </li>
            <li>
              <span className="px-2 py-1 medium skill-bg rounded text-dark">
                HTML5
              </span>
            </li>
            <li>
              <span className="px-2 py-1 medium theme-bg rounded text-light">
                +3 More
              </span>
            </li>
          </ul>
        </div>
        <div className="job_grid_footer pb-4 px-3">
          <div className="df-1 text-dark ft-medium col-12 mt-3">
            <Link
              href="candidate-detail.html"
              className="btn gray apply-btn rounded full-width"
            >
              View Candidate<i className="lni lni-arrow-right-circle ml-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateSearchResultSearchCard;
