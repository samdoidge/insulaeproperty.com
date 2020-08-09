import React from "react"

import { COLORS, BORDER_RADIUS } from "../styles/constants"
import "../styles/button.css"

const Button = ({ children }) => (
  <a href="mailto:hello@insulaeproperty.com"
    style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 700,
      background: COLORS.orange,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
      textDecoration: 'none'
    }}
  >
    {children}
  </a>
)

export default Button
