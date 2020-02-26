import React from "react"
import Link from "./shared/Link"

export const skillsColumns = [
  {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/skills/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Characteristic", name: "characteristic" },
  { label: "Type", name: "type" },
  { label: "Index", name: "index", options: { filter: false } },
]
