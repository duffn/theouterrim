import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
  humanizedNumberRender,
  priceRender,
} from "./shared/ColumnHelper"
import {
  PRICE_FILTER_OPTIONS,
  getRangeFilterOptions,
} from "./shared/FilterHelper"
import ProvideBookData from "./shared/BookDataProvider"

import { slugify } from "../utils/slugify"

export default function VehicleAttachmentsColumnProvider({
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
              to={`/vehicle-attachments/${
                tableMeta.rowData[GENERATED_ID_COL_INDEX]
              }/${slugify(value)}/`}
            >
              {value}
            </Link>
          ),
          sortDirection: "asc",
          filter: false,
        },
      },
      {
        label: "Price",
        name: "price",
        options: {
          customBodyRender: priceRender,
          ...PRICE_FILTER_OPTIONS,
        },
      },
      {
        label: "HP",
        name: "hp",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("HP"),
        },
      },
      {
        label: "Rarity",
        name: "rarity",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Rarity"),
        },
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
