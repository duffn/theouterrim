import React from "react"
import Link from "./shared/Link"

export const talentsColumns = [
  {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/talents/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
    },
  },
  { label: "Activation", name: "activation" },
  { label: "Ranked", name: "ranked" },
  { label: "Force Sensitive", name: "forceSensitive" },
  { label: "Index", name: "index" },
]
