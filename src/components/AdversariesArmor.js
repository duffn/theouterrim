import React from "react"
import Link from "./shared/Link"

export const adversariesArmorColumns = [
  { name: "generatedId", options: { display: false, viewColumns: false } },
  {
    label: "Name",
    name: "name",
    options: {
    customBodyRender: (value, tableMeta) => (
      <Link to={`/adversaries-armor/${tableMeta.rowData[0]}/`}>
        {value}
      </Link>
    ),
    sortDirection: "asc",
    }
  },
  { label: "Defense", name: "defense", numeric: true },
  { label: "Soak", name: "soak", numeric: true },
  { label: "Encum.", name: "encumbrance", numeric: true },
  { label: "HP", name: "hp", numeric: true },
  { label: "Index", name: "index" },
]
