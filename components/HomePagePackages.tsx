import React from "react";
import { packages } from "../StaticData/homePage";
import Package from "./Package";

const HomePagePackages = () => {
  return (
    <>
      <section className="space min">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Our Pricing</h6>
                <h2 className="ft-bold">Choose Your Package</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            {packages.map((p) => (
              <div className="col-lg-4 col-md-4" key={p.id}>
                <Package {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePagePackages;
