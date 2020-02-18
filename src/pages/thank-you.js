import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import Title from "../components/Title"

const Supporters = () => {
  return (
    <Dashboard>
      <SEO title="Thank You!" />
      <Container>
        <Title>Thank You!</Title>
        <Typography component="p" gutterBottom>
          Thank you for supporting The Outer Rim! It is truly appreciated.
        </Typography>
      </Container>
    </Dashboard>
  )
}

export default Supporters
