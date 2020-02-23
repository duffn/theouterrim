import React from "react"
import Link from "./shared/Link"

export const weaponAttachmentsColumns = [
  { name: "generatedId", options: { display: false, viewColumns: false } },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/weapon-attachments/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
    },
  },
  { label: "Category", name: "category" },
  { label: "Price", name: "price" },
  { label: "Encum.", name: "encumbrance", numeric: true },
  { label: "HP", name: "hp", numeric: true },
  { label: "Rarity", name: "rarity", numeric: true },
  { label: "Index", name: "index" },
]
