import React from "react"
import Link from "./Link"

export const adversariesArmorColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/adversaries-armor/${rowData.generatedId}`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
  },
  { title: "Defense", field: "defense" },
  { title: "Soak", field: "soak" },
  { title: "Encum.", field: "encumbrance" },
  { title: "HP", field: "hp" },
  { title: "Index", field: "index" },
]
