import React from "react"
import Link from "./shared/Link"
import { makeColumns, GENERATED_ID_COL_INDEX } from "./shared/ColumnFactory"

export const adversariesArmorColumns = makeColumns([
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link
          to={`/adversaries-armor/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}
        >
          {value}
        </Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Defense", name: "defense" },
  { label: "Soak", name: "soak" },
  { label: "Index", name: "index", options: { filter: false } },
])
