import React from "react"
import Link from "./shared/Link"

export const creaturesColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/creatures/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Level", name: "level" },
  { label: "Skills", name: "skills" },
  { label: "Talents", name: "talents" },
  { label: "Abilities", name: "abilities" },
  { label: "Equipment", name: "equipment" },
  { label: "Index", name: "index", grouping: false },
]
