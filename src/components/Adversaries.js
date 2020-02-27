import React from "react"
import Link from "./shared/Link"

export const adversariesColumns = [
  {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/adversaries/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Level", name: "level" },
  { label: "Skills", name: "skills" },
  { label: "Talents", name: "talents" },
  { label: "Abilities", name: "abilities" },
  { label: "Equipment", name: "equipment" },
  { label: "Index", name: "index", options: { filter: false } },
]
