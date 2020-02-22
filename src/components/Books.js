import React from "react"
import Link from "./shared/Link"

export const booksColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/books/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "System", name: "system" },
  { label: "Key", name: "key", grouping: false },
  { label: "Initials", name: "initials", grouping: false },
]
