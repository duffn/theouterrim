import React from "react"
import Link from "./shared/Link"

export const abilitiesColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/abilities/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
  },
  { title: "Description", field: "description" },
  { title: "Index", field: "index" },
]
