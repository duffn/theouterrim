import React from "react"
import Link from "./shared/Link"

export const adversariesGearColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/adversaries-gear/${rowData.generatedId}/`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Index", field: "index", grouping: false },
]
