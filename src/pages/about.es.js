import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About"/>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            About
          </h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <p>Esta sitio fue creado con la ayuda de Gatsby y esta en proceso de desarrollo <span role="img"
                                                                                              aria-label="sheep">👨‍💻</span>,
          tu puedes ayudarme en: <a href="https://github.com/alvareztech/alvareztech" target="_blank"
                                    rel="noopener noreferrer">github.com/alvareztech/alvareztech</a></p>
      </div>
    </section>
  </Layout>
)

export default AboutPage
