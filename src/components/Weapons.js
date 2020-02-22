import React from "react"
import Link from "./shared/Link"

export const weaponsColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/weapons/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Category", name: "category" },
  { label: "Skill", name: "skill" },
  { label: "Damage", name: "damage", numeric: true },
  { label: "Crit", name: "crit" },
  { label: "Range", name: "range" },
  { label: "Encum.", name: "encumbrance", numeric: true },
  { label: "HP", name: "hp", numeric: true },
  { label: "Price", name: "price" },
  { label: "Rarity", name: "rarity", numeric: true },
  { label: "Special", name: "special" },
  { label: "Index", name: "index", grouping: false },
]
