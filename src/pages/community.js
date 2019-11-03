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
            Community
          </h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container content">
        <p>Join our community.</p>
        <h2>WhatsApp</h2>
        <div className="buttons">
          <a href="https://chat.whatsapp.com/7chmALKNdqM5U6gGDCmila" className="button is-primary is-rounded">Android
            Developers</a>
          <a href="https://chat.whatsapp.com/GUeU4cW6wrrJpO5KntBujd" className="button is-primary is-rounded">iOS
            Developers</a>
        </div>
        <h2>Telegram</h2>
        <p>Soon.</p>
      </div>
    </section>
  </Layout>
)

export default AboutPage
