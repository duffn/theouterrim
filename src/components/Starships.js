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
  { label: "Silhouette", name: "silhouette" },
  { label: "Speed", name: "speed" },
  { label: "Handling", name: "handling" },
  { label: "Navicomputer", name: "navicomputer" },
  { label: "Crew", name: "crew" },
  { label: "Encum.", name: "encumbrance" },
  { label: "Passengers", name: "passengers" },
  { label: "Price", name: "price" },
  { label: "Rarity", name: "rarity" },
  { label: "HP", name: "hp" },
  { label: "Weapons", name: "weapons" },
  { label: "Index", name: "index" },
]
