import React from "react"
import Link from "./shared/Link"
import { makeColumns, GENERATED_ID_COL_INDEX } from "./shared/ColumnFactory"

export const talentsColumns = makeColumns([
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/talents/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
          {value}
        </Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Activation", name: "activation" },
  { label: "Ranked", name: "ranked" },
  { label: "Force Sensitive", name: "forceSensitive" },
  { label: "Index", name: "index", options: { filter: false } },
])
