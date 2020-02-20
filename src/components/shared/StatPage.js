import React from "react"
import Grid from "@material-ui/core/Grid"

import Dashboard from "./Dashboard"
import SEO from "./SEO"
import Table from "./Table"

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
