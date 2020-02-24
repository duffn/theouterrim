import React from "react"
import Link from "./shared/Link"

export const abilitiesColumns = [
  {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/abilities/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Description", name: "description" },
  { label: "Index", name: "index", options: { filter: false } },
]
