import React from "react"
import Link from "./shared/Link"

export const qualitiesColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/qualities/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Active", name: "active" },
  { label: "Ranked", name: "ranked" },
  { label: "Effect", name: "effect", grouping: false },
  { label: "Index", name: "index", grouping: false },
]
