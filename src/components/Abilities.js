import React from "react"
import Link from "./shared/Link"
import { makeColumns, GENERATED_ID_COL_INDEX } from "./shared/ColumnFactory"

export const abilitiesColumns = makeColumns([
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/abilities/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
          {value}
        </Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Description", name: "description" },
  { label: "Index", name: "index", options: { filter: false } },
])
