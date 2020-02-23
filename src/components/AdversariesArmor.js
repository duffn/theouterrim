import React from "react"
import Link from "./shared/Link"

export const adversariesArmorColumns = [
  { name: "generatedId", options: { display: false, viewColumns: false } },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/adversaries-armor/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
    },
  },
  { label: "Defense", name: "defense" },
  { label: "Soak", name: "soak" },
  { label: "Encum.", name: "encumbrance" },
  { label: "HP", name: "hp" },
  { label: "Index", name: "index" },
]
