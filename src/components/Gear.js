import React from "react"
import Link from "./shared/Link"

export const gearColumns = [
  {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/gear/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Category", name: "category" },
  { label: "Price", name: "price" },
  { label: "Rarity", name: "rarity" },
  {
    label: "Encum.",
    name: "encumbrance",
  },
  {
    label: "Index",
    name: "index",
    options: { filter: false },
  },
]
