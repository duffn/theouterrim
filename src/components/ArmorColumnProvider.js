import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
  priceRender,
  humanizedNumberRender,
} from "./shared/ColumnHelper"
import {
  getRangeFilterOptions,
  PRICE_FILTER_OPTIONS,
} from "./shared/FilterHelper"
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
      {
        label: "Defense",
        name: "defense",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Defense"),
        },
      },
      {
        label: "Soak",
        name: "soak",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Soak"),
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
        label: "Encum.",
        name: "encumbrance",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Encum."),
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
