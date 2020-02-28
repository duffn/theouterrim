import React from "react"
import Link from "./shared/Link"
import { makeColumns, GENERATED_ID_COL_INDEX } from "./shared/ColumnFactory"

export const speciesColumns = makeColumns([
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/species/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
          {value}
        </Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Player?", name: "player" },
  { label: "Index", name: "index", options: { filter: false } },
])
