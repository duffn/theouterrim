import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  RESTRICTED_COL_INDEX,
} from "./shared/ColumnFactory"

export const vehiclesColumns = makeColumns(
  [
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link to={`/vehicles/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    { label: "Category", name: "category" },
    { label: "Manufacturer", name: "manufacturer" },
    { label: "Model", name: "model" },
    { label: "Silhouette", name: "silhouette" },
    { label: "Speed", name: "speed" },
    { label: "Handling", name: "handling" },
    { label: "Crew", name: "crew" },
    { label: "Encum.", name: "encumbrance" },
    { label: "Passengers", name: "passengers" },
    {
      label: "Price",
      name: "price",
      options: {
        customBodyRender: (value, tableMeta) =>
          `${
            tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""
          }${value.toLocaleString()}`,
      },
    },
    { label: "Rarity", name: "rarity" },
    { label: "HP", name: "hp" },
    { label: "Weapons", name: "weapons" },
    { label: "Index", name: "index", options: { filter: false } },
  ],
  true
)
