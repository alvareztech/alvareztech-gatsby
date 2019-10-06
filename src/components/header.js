import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <h1>
      <Link to="/" className={headerStyles.title}>
        {siteTitle}
      </Link>
    </h1>
    <nav>
      <ul className={headerStyles.navList}>
        <li><Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link></li>
        <li><Link to="/contact" className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
        <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
        </li>
      </ul>
    </nav>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
