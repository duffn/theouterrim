import React from "react"
import Link from "./Link"

export const vehicleAttachmentsColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/vehicle-attachments/${rowData.generatedId}`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Price", field: "price" },
  { title: "HP", field: "hp", numeric: true },
  { title: "Rarity", field: "rarity", numeric: true },
  { title: "Index", field: "index", grouping: false },
]
