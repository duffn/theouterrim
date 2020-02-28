import React from "react"
import Link from "./shared/Link"
import { makeColumns, GENERATED_ID_COL_INDEX } from "./shared/ColumnFactory"

export const qualitiesColumns = makeColumns([
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/qualities/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
          {value}
        </Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Active", name: "active" },
  { label: "Ranked", name: "ranked" },
  { label: "Effect", name: "effect", options: { filter: false } },
  { label: "Index", name: "index", options: { filter: false } },
])
