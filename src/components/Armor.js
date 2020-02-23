import React from "react"
import Link from "./shared/Link"

export const armorColumns = [
  { name: "generatedId", options: { display: false, viewColumns: false } },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/armor/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
    },
  },
  { label: "Defense", name: "defense", numeric: true },
  { label: "Soak", name: "soak", numeric: true },
  { label: "Price", name: "price" },
  { label: "Encum.", name: "encumbrance", numeric: true },
  { label: "HP", name: "hp", numeric: true },
  { label: "Rarity", name: "rarity", numeric: true },
  { label: "Index", name: "index" },
]
