import React from "react"
import Link from "./shared/Link"

export const weaponsColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/weapons/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Category", field: "category" },
  { title: "Skill", field: "skill" },
  { title: "Damage", field: "damage", numeric: true },
  { title: "Crit", field: "crit" },
  { title: "Range", field: "range" },
  { title: "Encum.", field: "encumbrance", numeric: true },
  { title: "HP", field: "hp", numeric: true },
  { title: "Price", field: "price" },
  { title: "Rarity", field: "rarity", numeric: true },
  { title: "Special", field: "special" },
  { title: "Index", field: "index", grouping: false },
]
