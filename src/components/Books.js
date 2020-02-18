import React from "react"
import Link from "./shared/Link"

export const booksColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/books/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "System", field: "system" },
  { title: "Key", field: "key", grouping: false },
  { title: "Initials", field: "initials", grouping: false },
]
