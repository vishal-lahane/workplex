import { CatCard } from "../Models/DataTypes";

const CategoryCard = ({ id, icon, catName, jobs }: CatCard) => {
  return (
    <>
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="cats-wrap text-center">
          <a
            href="job-search-v1.html"
            className="cats-box d-block rounded bg-white px-2 py-4"
          >
            <div className="text-center mb-2 mx-auto position-relative d-inline-flex align-items-center justify-content-center p-3 theme-bg-light circle">
              <i className={icon}></i>
            </div>
            <div className="cats-box-caption">
              <h4 className="fs-md mb-0 ft-medium m-catrio">{catName}</h4>
              <span className="text-muted">{jobs} Jobs</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
