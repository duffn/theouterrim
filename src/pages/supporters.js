import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Dashboard from "../components/shared/Dashboard"
import Link from "../components/shared/Link"
import SEO from "../components/shared/SEO"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Saira Semi Condensed",
    marginTop: "2rem",
  },
}))

const Supporters = () => {
  const classes = useStyles()

  return (
    <Dashboard>
      <SEO title="Supporters" />
      <Grid container item xs={12}>
        <Typography component="p" gutterBottom>
          Thank you for supporting The Outer Rim! Find out more about the
          different tiers on{" "}
          <Link component="a" href="https://patreon.com/duffn">
            Patreon
          </Link>
          .
        </Typography>
        <Typography
          className={classes.title}
          component="h1"
          variant="h2"
          color="primary"
          gutterBottom
        >
          I Am The Senate
        </Typography>
        <Typography component="p" gutterBottom>
          Nobody here yet.
        </Typography>
        <Typography
          className={classes.title}
          component="h1"
          variant="h3"
          color="primary"
          gutterBottom
        >
          Jedi
        </Typography>
        <Typography component="p" gutterBottom>
          Nobody here yet.
        </Typography>
        <Typography
          className={classes.title}
          component="h1"
          variant="h4"
          color="primary"
          gutterBottom
        >
          Padawan
        </Typography>
        <Typography component="p" gutterBottom>
          Nobody here yet.
        </Typography>
      </Grid>
    </Dashboard>
  )
}

export default Supporters
