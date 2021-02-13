import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return(
    <div>
      <Layout>
          <h1>おきまりのサイト</h1>
          {data.allMarkdownRemark.nodes.map(x => (
            <div key={x.id}>
              <h3>{x.frontmatter.title}</h3>
              <p>{x.frontmatter.date}</p>
              <div dangerouslySetInnerHTML={{ __html: x.html }} />
            </div>
          ))}
      </Layout>
    </div>
  ) 
}


export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        html
        timeToRead
        frontmatter {
          date
          title
        }
      }
    }
  }
`

