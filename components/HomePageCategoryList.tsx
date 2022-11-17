import { categories } from "../StaticData/homePage";
import CategoryCard from "./CategoryCard";

const HomePageCategoryList = () => {
  return (
    <>
      <section className="space gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Popular Categories</h6>
                <h2 className="ft-bold">Browse Top Categories</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            {categories.map((c) => (
              <CategoryCard {...c} key={c.id} />
            ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="position-relative text-center">
                <a
                  href="browse-category.html"
                  className="btn btn-md bg-dark rounded text-light hover-theme"
                >
                  Browse All Categories
                  <i className="lni lni-arrow-right-circle ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageCategoryList;
