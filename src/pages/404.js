import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found"/>

    <section className="hero is-dark is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Tutorial Not Found <span role="img" aria-label="impressed">😮</span>
          </h1>
          <h2 className="subtitle">
            But you can find a better one <Link to="/">here</Link>.
          </h2>
        </div>
      </div>
    </section>

  </Layout>
)

export default NotFoundPage
