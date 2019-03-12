import React from "react"
import { Link, graphql } from "gatsby"
// import Header from "../components/Header"
import Container from "../components/container"
import User from "../components/User"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default ({ data }) => (
  <Container>
    <div style={{ color: `purple` }}>
      {/* <Header text="Laura's special site" /> */}
      <p>What a world.</p>
      <p>
        <Link to="/about/">About page</Link>
      </p>
      <p>
        <Link to="/contact/">Contact page</Link>
      </p>
      <User
        username="Dan"
        excerpt="I love Laura So"
        avatar="https://pbs.twimg.com/profile_images/626098125820850176/4PNpLBe2_400x400.jpg"
      />
      <User
        username="Laura"
        excerpt="bello"
        avatar="https://pbs.twimg.com/profile_images/1101562883450830849/ngJeMGDq_400x400.jpg"
      />
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>
          {data.allMarkdownRemark.totalCount} Posts
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
      <img
        src="https://heuheuheuweb.files.wordpress.com/2018/09/img_8631.jpg?w=700&h=3"
        alt=""
      />
      <img
        src="https://heuheuheuweb.files.wordpress.com/2018/09/img_8738-e1537040019775.jpg?w=736"
        alt=""
      />
    </div>
  </Container>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fileAbsolutePath
          rawMarkdownBody
          html
          timeToRead
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
