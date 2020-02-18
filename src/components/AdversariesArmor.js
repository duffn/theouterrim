import React from "react"
import Link from "./Link"

export const adversariesArmorColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/adversaries-armor/${rowData.generatedId}`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Defense", field: "defense", numeric: true },
  { title: "Soak", field: "soak", numeric: true },
  { title: "Encum.", field: "encumbrance", numeric: true },
  { title: "HP", field: "hp", numeric: true },
  { title: "Index", field: "index", grouping: false },
]
