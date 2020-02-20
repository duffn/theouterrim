import React from "react"
import Grid from "@material-ui/core/Grid"

import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"

export default function StatPage({ title, columns, data, noGrouping }) {
  return (
    <Dashboard>
      <SEO title={title} />
      <Grid container item xs={12}>
        <Table
          title={title}
          columns={columns}
          grouping={noGrouping && "false"}
          data={data.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
      </Grid>
    </Dashboard>
  )
}
