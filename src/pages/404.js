import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Title from "../components/shared/Title"
import { ThemeProvider } from "../components/shared/ThemeContext"

const NotFoundPage = () => {
  return (
    <ThemeProvider>
      <Dashboard>
        <SEO title="404: Not Found" />
        <Grid container item xs={12}>
          <Title>Not Found</Title>
        </Grid>
        <Grid container item xs={12}>
          <Typography component="p" gutterBottom>
            This isn't the page you're looking for.
          </Typography>
        </Grid>
      </Dashboard>
    </ThemeProvider>
  )
}

export default NotFoundPage
