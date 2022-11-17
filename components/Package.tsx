import { Package } from "../Models/DataTypes";

const Package = ({
  id,
  name,
  price,
  users,
  uptime,
  bandwidth,
  storage,
  phs,
  esla,
  bestVal,
}: Package) => {
  return (
    <>
      <div className="pricing_wrap">
        <div className="prt_head">
          {bestVal && <div className="recommended">Best Value</div>}
          <h4 className="ft-medium">{name}</h4>
        </div>
        <div className="prt_price">
          <h2 className="ft-bold">
            <span>$</span>
            {price}
          </h2>
          <span className="fs-md">{users} per user, per month</span>
        </div>
        <div className="prt_body">
          <ul>
            <li>{uptime}% Uptime Guarantee</li>
            <li>{bandwidth}GB CDN Bandwidth</li>
            <li>{storage}GB Cloud Storage</li>
            <li className={`${phs ? "none" : ""}`}>Personal Help Support</li>
            <li className={`${esla ? "none" : ""}`}>Enterprise SLA</li>
          </ul>
        </div>
        <div className="prt_footer">
          <a
            href="#"
            className={`${
              bestVal ? "btn choose_package active" : "btn choose_package"
            }`}
          >
            Start {name}
          </a>
        </div>
      </div>
    </>
  );
};

export default Package;
