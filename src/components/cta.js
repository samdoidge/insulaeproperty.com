import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "2rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Better Homes"
      description="Providing high specification rental properties in some of the most in-demand locations within the United Kingdom."
    />
    <Button>Contact Us</Button>
  </div>
)

export default CallToAction
