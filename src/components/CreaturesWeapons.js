import React from "react"
import Link from "./Link"

export const creaturesWeaponsColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/creatures-weapons/${rowData.generatedId}`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Skill", field: "skill" },
  { title: "Damage", field: "damage", numeric: true },
  { title: "Crit", field: "crit" },
  { title: "Range", field: "range" },
  { title: "Special", field: "special" },
  { title: "Index", field: "index", grouping: false },
]
