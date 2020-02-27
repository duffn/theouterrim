import React from "react"
import Link from "./shared/Link"
import { makeColumns, GENERATED_ID_COL_INDEX } from "./shared/ColumnFactory"

export const skillsColumns = makeColumns([
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/skills/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
          {value}
        </Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Characteristic", name: "characteristic" },
  { label: "Type", name: "type" },
  { label: "Index", name: "index", options: { filter: false } },
])
