import React from "react"
import Link from "./shared/Link"

export const talentsColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/talents/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Activation", name: "activation" },
  { label: "Ranked", name: "ranked" },
  { label: "Force Sensitive", name: "forceSensitive" },
  { label: "Index", name: "index", grouping: false },
]
