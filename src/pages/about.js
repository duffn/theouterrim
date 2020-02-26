import { graphql } from "gatsby"
import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import About from "../components/About"
import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"
import Title from "../components/shared/Title"

export default function AboutPage({ data }) {
  return (
    <Dashboard>
      <SEO title="About" />
      <About title="About" />
      <Grid container item xs={12}>
        <Title>Content Status</Title>
      </Grid>
      <Grid container item xs={12}>
        <Typography component="p" gutterBottom>
          Check this table for the most up-to-date status on content updates.
          Here you can see if a book has been entered into The Outer Rim or if
          the data has been audited. Data is constantly being updated so check
          back often!
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Table
          marginTop
          title="Content Status"
          columns={[
            {
              label: "Book",
              name: "book",
              options: {
                sortDirection: "asc",
              },
            },
            { label: "Resource", name: "resource" },
            { label: "Entered", name: "entered" },
            { label: "Audited", name: "audited" },
          ]}
          data={data.allContentStatusYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
      </Grid>
    </Dashboard>
  )
}

export const query = graphql`
  query ContentStatusQuery {
    allContentStatusYaml {
      edges {
        node {
          book
          resource
          source
          entered
          audited
        }
      }
    }
  }
`
