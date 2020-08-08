import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"
import logoImage from "../images/logo.png"
import SectionHeader from "./section-header"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "2rem 1rem",
    }}
  >
    {/* <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    /> */}
    {/* <h1 style={{ textAlign: "center" }}>Landing Page Starter</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      This landing page looks great on all devices and is minimal in design. Add
      what you want and deploy.
    </p> */}
    {/* <Button>Get Early Access</Button> */}
    <div style={{ margin: 60, maxWidth: `500px`, position: "relative" }}>

        <img
          src={logoImage}
          alt="Insulae Property logo, an Ancient Roman insulae building next to the company name."
        />
       

    </div>

    
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
