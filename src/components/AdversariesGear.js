import React from "react"
import Link from "./Link"

export const adversariesGearColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/adversaries-gear/${rowData.generatedId}`}>
        {rowData.name}
      </Link>
    ),
    defaultSort: "asc",
  },
  { title: "Encum.", field: "encumbrance" },
  { title: "Index", field: "index" },
]
