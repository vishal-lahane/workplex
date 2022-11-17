import Image from "next/image";
import { BlogCard } from "../Models/DataTypes";

const BlogCard = ({
  id,
  banner,
  catgory,
  title,
  desc,
  user,
  views,
  published,
}: BlogCard) => {
  return (
    <>
      <div className="blg_grid_box">
        <div className="blg_grid_thumb">
          <a href="blog-detail.html">
            <Image src={banner} className="img-fluid" alt="" />
          </a>
        </div>
        <div className="blg_grid_caption">
          <div className="blg_tag">
            <span>{catgory}</span>
          </div>
          <div className="blg_title">
            <h4>
              <a href="blog-detail.html">{title}</a>
            </h4>
          </div>
          <div className="blg_desc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="crs_grid_foot">
          <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
            <div className="crs_fl_first">
              <div className="crs_tutor">
                <div className="crs_tutor_thumb">
                  <a href="instructor-detail.html">
                    <Image
                      src={user}
                      className="img-fluid circle"
                      width="35"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="crs_fl_last">
              <div className="foot_list_info">
                <ul>
                  <li>
                    <div className="elsio_ic">
                      <i className="fa fa-eye text-success"></i>
                    </div>
                    <div className="elsio_tx">{views} Views</div>
                  </li>
                  <li>
                    <div className="elsio_ic">
                      <i className="fa fa-clock text-warning"></i>
                    </div>
                    <div className="elsio_tx">{published}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
