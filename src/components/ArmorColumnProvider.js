import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  RESTRICTED_COL_INDEX,
  indexRender,
  PRICE_FILTER_OPTIONS,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

export default function ArmorColumnProvider({ children, currentBook }) {
  let bookData = ProvideBookData()
  let columns = makeColumns(
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
            `${
              tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""
            }${value.toLocaleString()}`,
          ...PRICE_FILTER_OPTIONS,
        },
      },
      { label: "Encum.", name: "encumbrance" },
      { label: "HP", name: "hp" },
      { label: "Rarity", name: "rarity" },
      {
        label: "Index",
        name: "index",
        options: {
          filter: false,
          sort: false,
          customBodyRender: (value, tableMeta) =>
            indexRender(value, tableMeta, bookData, currentBook),
        },
      },
    ],
    true
  )

  return React.cloneElement(React.Children.only(children), { columns })
}
