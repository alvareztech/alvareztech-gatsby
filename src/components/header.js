import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>

    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">{siteTitle}</Link>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/contact">Contact</Link>
            <Link className="navbar-item" to="/about">About</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet"
                     target="_blank"
                     href="https://twitter.com/alvarez_tech">
                    <span>
                Twitter
              </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary"
                     target="_blank"
                     href="https://www.youtube.com/alvareztech">
                    YouTube
                  </a>
                </p>
              </div>
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
