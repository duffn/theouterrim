import React from "react"
import Link from "./shared/Link"

export const qualitiesColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/qualities/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Active", field: "active" },
  { title: "Ranked", field: "ranked" },
  { title: "Effect", field: "effect", grouping: false },
  { title: "Index", field: "index", grouping: false },
]
