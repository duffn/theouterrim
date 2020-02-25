import React from "react"
import Link from "./shared/Link"

export const adversariesArmorColumns = [
  {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/adversaries-armor/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Defense", name: "defense" },
  { label: "Soak", name: "soak" },
  { label: "Index", name: "index", options: { filter: false } },
]
