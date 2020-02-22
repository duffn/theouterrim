import React from "react"
import Link from "./shared/Link"

export const weaponAttachmentsColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/weapon-attachments/${rowData.generatedId}/`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Category", field: "category" },
  { title: "Price", field: "price" },
  { title: "Encum.", field: "encumbrance", numeric: true },
  { title: "HP", field: "hp", numeric: true },
  { title: "Rarity", field: "rarity", numeric: true },
  { title: "Index", field: "index", grouping: false },
]
