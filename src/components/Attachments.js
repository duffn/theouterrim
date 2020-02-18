import React from "react"
import Link from "./Link"

export const attachmentsColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/attachments/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
  },
  { title: "Category", field: "category" },
  { title: "Price", field: "price" },
  { title: "Encum.", field: "encumbrance" },
  { title: "HP", field: "hp" },
  { title: "Rarity", field: "rarity" },
  { title: "Index", field: "index" },
]
