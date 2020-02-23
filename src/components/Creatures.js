import React from "react"
import Link from "./shared/Link"

export const creaturesColumns = [
  { name: "generatedId", options: { display: false, viewColumns: false } },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/creatures/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
    },
  },
  { label: "Level", name: "level" },
  { label: "Skills", name: "skills" },
  { label: "Talents", name: "talents" },
  { label: "Abilities", name: "abilities" },
  { label: "Equipment", name: "equipment" },
  { label: "Index", name: "index" },
]
