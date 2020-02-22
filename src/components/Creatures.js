import React from "react"
import Link from "./shared/Link"

export const creaturesColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/creatures/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Level", field: "level" },
  { title: "Skills", field: "skills" },
  { title: "Talents", field: "talents" },
  { title: "Abilities", field: "abilities" },
  { title: "Equipment", field: "equipment" },
  { title: "Index", field: "index", grouping: false },
]
