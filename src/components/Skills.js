import React from "react"
import Link from "./shared/Link"

export const skillsColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/skills/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Characteristic", name: "characteristic" },
  { label: "Type", name: "type" },
  { label: "Index", name: "index", grouping: false },
]
