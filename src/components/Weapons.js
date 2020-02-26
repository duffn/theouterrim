import React from "react"
import Link from "./shared/Link"

export const weaponsColumns = [
  {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/weapons/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Category", name: "category" },
  { label: "Skill", name: "skill" },
  { label: "Damage", name: "damage" },
  { label: "Crit", name: "crit" },
  { label: "Range", name: "range" },
  { label: "Encum.", name: "encumbrance" },
  { label: "HP", name: "hp" },
  { label: "Price", name: "price" },
  { label: "Rarity", name: "rarity" },
  { label: "Special", name: "special" },
  { label: "Index", name: "index", options: { filter: false } },
]
