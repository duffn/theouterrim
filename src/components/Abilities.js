import React from "react"
import Link from "./shared/Link"

export const abilitiesColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/abilities/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
  },
  { label: "Description", name: "description" },
  { label: "Index", name: "index" },
]
