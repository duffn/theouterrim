import React from "react"
import Link from "./shared/Link"

export const gearColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/gear/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Category", field: "category" },
  { title: "Price", field: "price" },
  { title: "Rarity", field: "rarity", numeric: true },
  {
    title: "Encum.",
    field: "encumbrance",
    numeric: true,
  },
  {
    title: "Index",
    field: "index",
    grouping: false,
  },
]
