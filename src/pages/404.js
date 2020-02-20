import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Title from "../components/shared/Title"

const NotFoundPage = () => {
  return (
    <Dashboard>
      <SEO title="404: Not Found" />
      <Grid container item xs={12}>
        <Title>Not Found</Title>
        <Typography component="p" gutterBottom>
          This is not the page you're looking for.
        </Typography>
      </Grid>
    </Dashboard>
  )
}

export default NotFoundPage
