import React from "react"
import Link from "./shared/Link"

export const adversariesArmorColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/adversaries-armor/${rowData.generatedId}/`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Defense", name: "defense", numeric: true },
  { label: "Soak", name: "soak", numeric: true },
  { label: "Encum.", name: "encumbrance", numeric: true },
  { label: "HP", name: "hp", numeric: true },
  { label: "Index", name: "index", grouping: false },
]
