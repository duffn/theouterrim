import React from "react"
import Link from "./Link"

export const gearColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/gear/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
  },
  { title: "Category", field: "category" },
  { title: "Price", field: "price" },
  { title: "Rarity", field: "rarity" },
  {
    title: "Encum.",
    field: "encumbrance",
  },
  {
    title: "Index",
    field: "index",
  },
]
