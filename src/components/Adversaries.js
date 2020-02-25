import React from "react"
import Link from "./shared/Link"
import { makeColumns, GENERATED_ID_COL_INDEX } from "./shared/ColumnFactory"

export const adversariesColumns = makeColumns([
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/adversaries/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
          {value}
        </Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Level", name: "level" },
  { label: "Skills", name: "skills" },
  { label: "Talents", name: "talents" },
  { label: "Abilities", name: "abilities" },
  { label: "Equipment", name: "equipment" },
  { label: "Index", name: "index", options: { filter: false } },
])
