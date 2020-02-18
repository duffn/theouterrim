import React from "react"
import Link from "./Link"

export const starshipsColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/starships/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
  },
  { title: "Category", field: "category" },
  { title: "Silhouette", field: "silhouette" },
  { title: "Speed", field: "speed" },
  { title: "Handling", field: "handling" },
  { title: "Model", field: "model" },
  { title: "Manufacturer", field: "manufacturer" },
  { title: "Navicomputer", field: "navicomputer" },
  { title: "Crew", field: "crew" },
  { title: "Encum.", field: "encumbrance" },
  { title: "Passengers", field: "passengers" },
  { title: "Price", field: "price" },
  { title: "Rarity", field: "rarity" },
  { title: "HP", field: "hp" },
  { title: "Weapons", field: "weapons" },
  { title: "Index", field: "index" },
]
