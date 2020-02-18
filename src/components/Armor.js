import React from "react"
import Link from "./Link"

export const armorColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/armor/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Defense", field: "defense", numeric: true },
  { title: "Soak", field: "soak", numeric: true },
  { title: "Price", field: "price" },
  { title: "Encum.", field: "encumbrance", numeric: true },
  { title: "HP", field: "hp", numeric: true },
  { title: "Rarity", field: "rarity", numeric: true },
  { title: "Index", field: "index", grouping: false },
]
