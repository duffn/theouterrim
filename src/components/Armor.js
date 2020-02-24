import React from "react"
import Link from "./shared/Link"

export const armorColumns = [
  {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  },
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
  { label: "Defense", name: "defense" },
  { label: "Soak", name: "soak" },
  { label: "Price", name: "price" },
  { label: "Encum.", name: "encumbrance" },
  { label: "HP", name: "hp" },
  { label: "Rarity", name: "rarity" },
  { label: "Index", name: "index" },
]
