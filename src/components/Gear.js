import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  RESTRICTED_COL_INDEX,
} from "./shared/ColumnFactory"

export const gearColumns = makeColumns(
  [
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link to={`/gear/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    { label: "Category", name: "category" },
    {
      label: "Price",
      name: "price",
      options: {
        customBodyRender: (value, tableMeta) =>
          `${tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""}${value}`,
      },
    },
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
  ],
  true
)
