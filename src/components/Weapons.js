import React from "react"
import Link from "./shared/Link"
import {
  RESTRICTED_COL_INDEX,
  GENERATED_ID_COL_INDEX,
  makeColumns,
} from "./shared/ColumnFactory"

export const weaponsColumns = makeColumns(
  [
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link to={`/weapons/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    { label: "Category", name: "category" },
    { label: "Skill", name: "skill" },
    { label: "Damage", name: "damage" },
    { label: "Crit", name: "crit" },
    { label: "Range", name: "range" },
    { label: "Encum.", name: "encumbrance" },
    { label: "HP", name: "hp" },
    {
      label: "Price",
      name: "price",
      options: {
        customBodyRender: (value, tableMeta) => {
          return `${
            tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""
          }${value.toLocaleString()}`
        },
      },
    },
    { label: "Rarity", name: "rarity" },
    { label: "Special", name: "special" },
    { label: "Index", name: "index", options: { filter: false } },
  ],
  true
)
