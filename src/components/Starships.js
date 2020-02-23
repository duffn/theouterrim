import React from "react"
import Link from "./shared/Link"

export const starshipsColumns = [
  { name: "generatedId", options: { display: false, viewColumns: false } },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/starships/${tableMeta.rowData[0]}/`}>{value}</Link>
      ),
      sortDirection: "asc",
    },
  },
  { label: "Category", name: "category" },
  { label: "Manufacturer", name: "manufacturer" },
  { label: "Model", name: "model" },
  { label: "Silhouette", name: "silhouette", numeric: true },
  { label: "Speed", name: "speed", numeric: true },
  { label: "Handling", name: "handling", numeric: true },
  { label: "Navicomputer", name: "navicomputer" },
  { label: "Crew", name: "crew", numeric: true },
  { label: "Encum.", name: "encumbrance", numeric: true },
  { label: "Passengers", name: "passengers", numeric: true },
  { label: "Price", name: "price" },
  { label: "Rarity", name: "rarity", numeric: true },
  { label: "HP", name: "hp", numeric: true },
  { label: "Weapons", name: "weapons", numeric: true },
  { label: "Index", name: "index" },
]
