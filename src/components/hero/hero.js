import React from "react";
import PropTypes from "prop-types";
import logoImage from "../../images/logo.png";
import "./hero.css";

const Hero = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "2rem 1rem",
    }}
  >
    <div className="Hero">
      <img
        src={logoImage}
        alt="Insulae Property logo, an Ancient Roman insulae building next to the company name."
      />
    </div>
  </div>
);

Hero.propTypes = {
  siteTitle: PropTypes.string,
};

Hero.defaultProps = {
  siteTitle: ``,
};

export default Hero;
