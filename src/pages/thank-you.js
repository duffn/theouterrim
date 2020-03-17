import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Title from "../components/shared/Title"
import { ThemeProvider } from "../components/shared/ThemeContext"

const ThankYou = () => {
  return (
    <ThemeProvider>
      <Dashboard>
        <SEO title="Thank You!" />
        <Grid container item xs={12}>
          <Title>Thank You!</Title>
          <Typography component="p" gutterBottom>
            Thank you for supporting The Outer Rim! It is truly appreciated.
          </Typography>
        </Grid>
      </Dashboard>
    </ThemeProvider>
  )
}

export default ThankYou
