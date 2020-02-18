import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Title from "../components/shared/Title"

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
