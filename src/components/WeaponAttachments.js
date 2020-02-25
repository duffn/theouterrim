import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  RESTRICTED_COL_INDEX,
  GENERATED_ID_COL_INDEX,
} from "./shared/ColumnFactory"

export const weaponAttachmentsColumns = makeColumns(
  [
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link
            to={`/weapon-attachments/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}
          >
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
    { label: "Encum.", name: "encumbrance" },
    { label: "HP", name: "hp" },
    { label: "Rarity", name: "rarity" },
    { label: "Index", name: "index", options: { filter: false } },
  ],
  true
)
