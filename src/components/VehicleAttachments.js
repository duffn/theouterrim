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
  },
  { title: "Price", field: "price" },
  { title: "HP", field: "hp" },
  { title: "Rarity", field: "rarity" },
  { title: "Index", field: "index" },
]
