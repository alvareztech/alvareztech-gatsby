import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact"/>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Contact
          </h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="content">
          <p>
            The best way to reach me is via <a href="https://twitter.com/alvarez_tech" target="_blank"
                                               rel="noopener noreferrer">@alvarez_tech</a> on
            Twitter.
          </p>
          <p className="buttons">
            <a className="button is-primary is-outlined" href="https://github.com/alvareztech" target="_blank">
              <span>GitHub</span>
            </a>
            <a className="button is-primary is-outlined" href="https://www.linkedin.com/in/alvareztech/"
               target="_blank">
              <span>LinkedIn</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
