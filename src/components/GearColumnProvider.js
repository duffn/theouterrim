import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  RESTRICTED_COL_INDEX,
  indexRender
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

export default function GearColumnProvider({children, currentBook}){
  let bookData = ProvideBookData
  let columns = makeColumns([
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
          `${
            tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""
          }${value.toLocaleString()}`,
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
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) =>
          indexRender(value, tableMeta, bookData, currentBook),
      },
    },
  ], true)

  return React.cloneElement(React.Children.only(children), { columns })
}
