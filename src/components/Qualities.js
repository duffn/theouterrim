import React from "react"
import Link from "./shared/Link"

export const qualitiesColumns = [
  {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/qualities/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Active", name: "active" },
  { label: "Ranked", name: "ranked" },
  { label: "Effect", name: "effect", options: { filter: false } },
  { label: "Index", name: "index", options: { filter: false } },
]
