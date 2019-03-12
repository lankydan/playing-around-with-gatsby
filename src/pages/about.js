import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { graphql } from "gatsby";

export default ({data}) => (
  <Container>
    <div style={{ color: `teal` }}>
      <Header text={data.site.siteMetadata.title + " About page"} />
      <p>Such wow. Very React.</p>
    </div>
  </Container>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
