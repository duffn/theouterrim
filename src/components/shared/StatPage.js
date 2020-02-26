import React from "react"
import Grid from "@material-ui/core/Grid"

import Dashboard from "./Dashboard"
import SEO from "./SEO"
import Table from "./Table"
import { Container } from "@material-ui/core"

export default function StatPage({ title, columns, data, noGrouping }) {
  return (
    <Dashboard>
      <SEO title={title} />
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
    </Dashboard>
  )
}
