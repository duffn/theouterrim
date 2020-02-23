import React from "react"
import Link from "./shared/Link"

export const weaponsColumns = [
  { name: "generatedId", options: { display: false, viewColumns: false } },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/weapons/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
    },
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
  { label: "Index", name: "index" },
]
