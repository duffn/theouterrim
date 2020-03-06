import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  RESTRICTED_COL_INDEX,
  GENERATED_ID_COL_INDEX,
  indexRender,
  PRICE_FILTER_OPTIONS,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

export default function WeaponAttachmentsColumnProvider({
  children,
  currentBook,
}) {
  let bookData = ProvideBookData()
  let columns = makeColumns(
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
            `${
              tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""
            }${value.toLocaleString()}`,
            ...PRICE_FILTER_OPTIONS
        },
      },
      { label: "Encum.", name: "encumbrance", options: { sort: false } },
      { label: "HP", name: "hp" },
      { label: "Rarity", name: "rarity", options: { sort: false } },
      {
        label: "Index",
        name: "index",
        options: {
          filter: false,
          customBodyRender: (value, tableMeta) =>
            indexRender(value, tableMeta, bookData, currentBook),
        },
      },
    ],
    true
  )

  return React.cloneElement(React.Children.only(children), { columns })
}
