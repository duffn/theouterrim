import React from "react"
import Link from "./shared/Link"

export const adversariesGearColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/adversaries-gear/${rowData.generatedId}/`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Encum.", name: "encumbrance", numeric: true },
  { label: "Index", name: "index", grouping: false },
]
