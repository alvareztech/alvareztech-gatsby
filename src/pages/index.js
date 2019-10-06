import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import postStyles from "./index.module.scss"

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
      <h1>I'm Daniel, a software engineer.</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image/>
      </div>

      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <div className={postStyles.post}>
            <Link to={edge.node.fields.slug}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.excerpt}</p>
            </Link>
          </div>
        )
      })}

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
