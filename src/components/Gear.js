import React from "react"
import Link from "./shared/Link"

export const gearColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/gear/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Category", name: "category" },
  { label: "Price", name: "price" },
  { label: "Rarity", name: "rarity", numeric: true },
  {
    label: "Encum.",
    name: "encumbrance",
    numeric: true,
  },
  {
    label: "Index",
    name: "index",
    grouping: false,
  },
]
