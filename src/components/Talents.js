import React from "react"
import Link from "./shared/Link"

export const talentsColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/talents/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Activation", field: "activation" },
  { title: "Ranked", field: "ranked" },
  { title: "Force Sensitive", field: "forceSensitive" },
  { title: "Index", field: "index", grouping: false },
]
