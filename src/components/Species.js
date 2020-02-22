import React from "react"
import Link from "./shared/Link"

export const speciesColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/species/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Player?", name: "player" },
  { label: "Index", name: "index", grouping: false },
]
