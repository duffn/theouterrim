import React from "react"
import Link from "./Link"

export const skillsColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/skills/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
  },
  { title: "Characteristic", field: "characteristic" },
  { title: "Type", field: "type" },
  { title: "Index", field: "index" },
]
