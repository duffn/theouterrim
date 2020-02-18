import React from "react"
import Link from "./Link"

export const speciesColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/species/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
  },
  { title: "Player?", field: "player" },
  { title: "Index", field: "index" },
]
