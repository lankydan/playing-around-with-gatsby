import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default () => (
  <Container>
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header text="Contact" />
      <p>Send us a message!</p>
    </div>
  </Container>
)
