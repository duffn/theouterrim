import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  RESTRICTED_COL_INDEX,
  indexRender,
  PRICE_FILTER_OPTIONS,
  humanizedNumberRender,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

import { slugify } from "../utils/slugify"

export default function GearColumnProvider({ children, currentBook }) {
  let bookData = ProvideBookData()
  let columns = makeColumns(
    [
      {
        label: "Name",
        name: "name",
        options: {
          customBodyRender: (value, tableMeta) => (
            <Link
              to={`/gear/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/${slugify(
                value
              )}/`}
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
            `${tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""}${
              (value && value.toLocaleString && value.toLocaleString()) || value
            }`,
          ...PRICE_FILTER_OPTIONS,
        },
      },
      {
        label: "Rarity",
        name: "rarity",
        options: { customBodyRender: humanizedNumberRender },
      },
      {
        label: "Encum.",
        name: "encumbrance",
        options: {
          sort: false,
        },
      },
      {
        label: "Notes",
        name: "notes",
        options: { sort: false, filter: false },
      },
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
