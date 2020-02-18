import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../components/shared/Dashboard"
import Link from "../components/shared/Link"
import SEO from "../components/shared/SEO"

const Supporters = () => {
  return (
    <Dashboard>
      <SEO title="Supporters" />
      <Container>
        <Typography component="p" gutterBottom>
          Thank you for supporting The Outer Rim! Find out more about the
          different tiers on{" "}
          <Link component="a" href="https://patreon.com/duffn">
            Patreon
          </Link>
          .
        </Typography>
        <Typography component="h1" variant="h2" color="primary" gutterBottom>
          I Am The Senate
        </Typography>
        <Typography component="p" gutterBottom>
          Nobody here yet.
        </Typography>
        <Typography component="h1" variant="h3" color="primary" gutterBottom>
          Jedi
        </Typography>
        <Typography component="p" gutterBottom>
          Nobody here yet.
        </Typography>
        <Typography component="h1" variant="h4" color="primary" gutterBottom>
          Padawan
        </Typography>
        <Typography component="p" gutterBottom>
          Nobody here yet.
        </Typography>
      </Container>
    </Dashboard>
  )
}

export default Supporters
