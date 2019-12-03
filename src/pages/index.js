import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const postStyle = {
  color: "black",
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
        edges {
          node {
            frontmatter {
              title,
              lang,
              tag
            }
            excerpt
            fields {
              slug
              tag
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
          <div className="container">
            <div className="content">
              <h1 className="title">
                Hello! I am Daniel, a software engineer.
              </h1>
              <p className="subtitle">
                iOS, Android development trainer. Here I share everything I do. Tutorials, code and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {data.allMarkdownRemark.edges.map((edge) => {
              return (
                <div className="column is-one-quarter">
                  <div className="content">
                    <h2>
                      <Link to={edge.node.fields.slug} style={postStyle}>{edge.node.frontmatter.title}</Link>
                    </h2>
                    <p>{edge.node.excerpt}</p>
                    <div className="tags has-addons">
                      <span className="tag">{edge.node.frontmatter.lang === "es" ? "🇪🇸" : "🇺🇸"}</span>
                      <span
                        className="tag is-primary">{edge.node.fields.tag ? edge.node.fields.tag.toUpperCase() : ""}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
