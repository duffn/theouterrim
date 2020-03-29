import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
  PRICE_FILTER_OPTIONS,
  humanizedNumberRender,
  priceRender,
} from "./shared/ColumnHelper"
import { getRangeFilterOptions } from "./shared/FilterHelper"
import ProvideBookData from "./shared/BookDataProvider"

export default function AttachmentsColumnProvider({ children, currentBook }) {
  let bookData = ProvideBookData()
  let columns = makeColumns(
    [
      {
        label: "Name",
        name: "name",
        options: {
          customBodyRender: (value, tableMeta) => (
            <Link
              to={`/attachments/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}
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
          customBodyRender: priceRender,
          ...PRICE_FILTER_OPTIONS,
        },
      },
      { label: "Encum.", name: "encumbrance", options: { sort: false } },
      {
        label: "HP",
        name: "hp",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("HP"),
        },
      },
      { label: "Rarity", name: "rarity", options: { sort: false } },
      { label: "Notes", name: "notes", options: { sort: false } },
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
