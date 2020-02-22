import React from "react"
import Link from "./shared/Link"

export const vehicleAttachmentsColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/vehicle-attachments/${rowData.generatedId}/`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Price", name: "price" },
  { label: "HP", name: "hp", numeric: true },
  { label: "Rarity", name: "rarity", numeric: true },
  { label: "Index", name: "index", grouping: false },
]
