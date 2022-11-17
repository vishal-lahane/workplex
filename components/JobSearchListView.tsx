import { jobs } from "../StaticData/homePage";
import JobSearchListCard from "./JobSearchListCard";

const JobSearchListView = () => {
  return (
    <>
      <div className="row align-items-center">
        {jobs.map((j) => (
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            key={j.id}
          >
            <JobSearchListCard {...j} />
          </div>
        ))}
      </div>
    </>
  );
};

export default JobSearchListView;
