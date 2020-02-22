import React from "react"
import Link from "./shared/Link"

export const creaturesWeaponsColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/creatures-weapons/${rowData.generatedId}/`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Skill", name: "skill" },
  { label: "Damage", name: "damage", numeric: true },
  { label: "Crit", name: "crit" },
  { label: "Range", name: "range" },
  { label: "Special", name: "special" },
  { label: "Index", name: "index", grouping: false },
]
