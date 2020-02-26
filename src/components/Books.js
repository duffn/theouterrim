import React from "react"
import Link from "./shared/Link"

export const booksColumns = [
  {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/books/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "System", name: "system" },
  { label: "Key", name: "key", options: { filter: false } },
  { label: "Initials", name: "initials", options: { filter: false } },
]
