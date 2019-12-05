import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../images/daniel-circle.png"

class Header extends Component {

  state = {
    activeMenu: false,
  }

  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
  }

  render () {
    let { siteTitle } = this.props
    return (
      <header>

        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src={logo} alt={siteTitle}/>
              </Link>
              <div className={`navbar-burger burger ${this.state.activeMenu ? "is-active" : ""}`}
                   data-target="navbarExampleTransparentExample"
                   onClick={this.toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div id="navbarExampleTransparentExample"
                 className={`navbar-menu ${this.state.activeMenu ? "is-active" : ""}`}>
              <div className="navbar-start">
                <Link className="navbar-item" to="/contact">Contact</Link>
                <Link className="navbar-item" to="/community">Community</Link>
                <Link className="navbar-item" to="/about">About</Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <p className="control">
                      <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet"
                         target="_blank"
                         rel="noopener noreferrer"
                         href="https://twitter.com/alvarez_tech">
                    <span>
                Twitter
              </span>
                      </a>
                    </p>
                    <p className="control">
                      <a className="button is-primary"
                         target="_blank"
                         rel="noopener noreferrer"
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
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
