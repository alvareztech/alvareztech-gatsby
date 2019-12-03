/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    const filePath = createFilePath({ node, getNode })
    const tag = filePath.substring(1, filePath.indexOf("/", 2))
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    createNodeField({
      node,
      name: "tag",
      value: tag,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/templates/post.js`)

  const result = await graphql(`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
            tag
          }
        }
      }
    }
  }
  `,
  )
  const posts = result.data.allMarkdownRemark.edges
  posts.forEach((post) => {
    createPage({
      component: postTemplate,
      path: post.node.fields.slug,
      context: {
        slug: post.node.fields.slug,
        tag: post.node.fields.tag,
      },
    })
  })
}
