import React from "react"

import Dashboard from "./Dashboard"
import SEO from "./SEO"
import Table from "./Table"
import { ThemeProvider } from "./ThemeContext"

export default function StatPage({
  title,
  columns,
  data,
  metadata,
  noGrouping,
}) {
  return (
    <ThemeProvider>
      <Dashboard>
        <SEO title={title} />
        <Table
          title={title}
          columns={columns}
          metadata={metadata}
          grouping={noGrouping && "false"}
          data={data.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
      </Dashboard>
    </ThemeProvider>
  )
}
