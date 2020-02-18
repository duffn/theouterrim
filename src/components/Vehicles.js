import React from "react"
import Link from "./Link"

export const vehiclesColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/vehicles/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
    grouping: false,
  },
  { title: "Category", field: "category" },
  { title: "Manufacturer", field: "manufacturer" },
  { title: "Model", field: "model" },
  { title: "Silhouette", field: "silhouette", numeric: true },
  { title: "Speed", field: "speed", numeric: true },
  { title: "Handling", field: "handling", numeric: true },
  { title: "Crew", field: "crew", numeric: true },
  { title: "Encum.", field: "encumbrance", numeric: true },
  { title: "Passengers", field: "passengers", numeric: true },
  { title: "Price", field: "price" },
  { title: "Rarity", field: "rarity", numeric: true },
  { title: "HP", field: "hp", numeric: true },
  { title: "Weapons", field: "weapons", numeric: true },
  { title: "Index", field: "index", grouping: false },
]
