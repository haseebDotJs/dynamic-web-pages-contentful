import { graphql } from "gatsby"
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const postContentful = ({ data }) => {
  const { image, content, title } = data.contentfulPost
  // const document = JSON.parse(content.raw)
  return (
    <div>
      <header
        style={{
          height: "50px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        Header
      </header>
      <h1>{title}</h1>
      <div>
        <img src={image.file.url} alt={title} />
      </div>
      {documentToReactComponents(document)}
      <footer
        style={{
          height: "50px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "orange",
        }}
      >
        footer
      </footer>
    </div>
  )
}

export const query = graphql`
  query Post($slug: String) {
    contentfulPost(slug: { eq: $slug }) {
      slug
      title
      image {
        file {
          url
        }
      }
      content {
        raw
      }
    }
  }
`
export default postContentful
