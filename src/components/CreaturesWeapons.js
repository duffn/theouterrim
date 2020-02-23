import React from "react"
import Link from "./shared/Link"

export const creaturesWeaponsColumns = [
  { name: "generatedId", options: { display: false, viewColumns: false } },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/creatures-weapons/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
    },
  },
  { label: "Skill", name: "skill" },
  { label: "Damage", name: "damage", numeric: true },
  { label: "Crit", name: "crit" },
  { label: "Range", name: "range" },
  { label: "Special", name: "special" },
  { label: "Index", name: "index" },
]
