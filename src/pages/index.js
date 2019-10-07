import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home"/>
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="content">
            <h1 className="title">
              I'm Daniel, a software engineer.
            </h1>
            <p className="subtitle">
              Software Engineer. iOS, Android development trainer. Tech speaker.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="columns is-multiline">
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <div className="column is-one-quarter">
                <div className="content">
                  <h2><Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link></h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
