import React from "react"
import "./footer.module.scss"

const Footer = ({ author }) => (
  <footer>
    By {author} © {new Date().getFullYear()}
  </footer>
)

export default Footer
