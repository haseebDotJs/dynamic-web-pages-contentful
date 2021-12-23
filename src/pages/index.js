import { graphql ,Link} from "gatsby"
import React from "react"
import "../styles/global.css"
export default function Home({ data }) {
  console.log("data", data)
  const { nodes } = data.allContentfulPost
  return <div style={{ margin: 0, padding: 0 }}>
    <header style={{ height: "50px", textAlign: "center", display: "flex", alignItems: "center",justifyContent: "center", backgroundColor: "red" }}>
      Header
    </header>
    <div>
      {nodes.map(post => (
        <div>
          <Link to={post.slug} ><h1>{post.title}</h1></Link>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
    <footer style={{ height: "50px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center",backgroundColor: "orange" }}>
      footer
    </footer>
  </div>
}

export const query = graphql`
 { 
  allContentfulPost(sort: {fields: contentful_id, order: ASC}) {
    nodes {
      description
      content {
        raw
      }
      title
      image {
        file {
          url
        }
      }
      slug
    }
  }
 }
`