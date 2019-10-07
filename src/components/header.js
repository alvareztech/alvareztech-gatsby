import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>

    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">{siteTitle}</Link>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/contact">Contact</Link>
          <Link className="navbar-item" to="/about">About</Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>YouTube</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
