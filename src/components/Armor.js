import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  RESTRICTED_COL_INDEX,
} from "./shared/ColumnFactory"

export const armorColumns = makeColumns(
  [
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link to={`/armor/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    { label: "Defense", name: "defense" },
    { label: "Soak", name: "soak" },
    {
      label: "Price",
      name: "price",
      options: {
        customBodyRender: (value, tableMeta) =>
          `${tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""}${value}`,
      },
    },
    { label: "Encum.", name: "encumbrance" },
    { label: "HP", name: "hp" },
    { label: "Rarity", name: "rarity" },
    { label: "Index", name: "index", options: { filter: false } },
  ],
  true
)
