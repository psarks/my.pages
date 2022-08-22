import React from "react";
import Resume from "../../images/Resume6.png";
import ScrollToTop from "../../components/ScrollToTop";

const CV = () => {
  return (
    <>
      <div className="resume">
        <ScrollToTop />
        <img style={{ overflow: "hidden" }} src={Resume} alt="Resume" />
      </div>
    </>
  );
};

export default CV;
