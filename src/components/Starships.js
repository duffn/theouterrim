import React from "react"
import Link from "./shared/Link"

export const starshipsColumns = [
  {
    label: "Name",
    name: "name",
    render: rowData => (
      <Link to={`/starships/${rowData.generatedId}/`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { label: "Category", name: "category" },
  { label: "Manufacturer", name: "manufacturer" },
  { label: "Model", name: "model", grouping: false },
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
  { label: "Index", name: "index", grouping: false },
]
