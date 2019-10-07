import React from "react"

const Footer = ({ author }) => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        By <strong>{author}</strong> © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
)

export default Footer
