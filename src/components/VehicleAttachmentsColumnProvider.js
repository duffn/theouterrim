import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  RESTRICTED_COL_INDEX,
  GENERATED_ID_COL_INDEX,
  indexRender,
  PRICE_FILTER_OPTIONS,
  humanizedNumberRender,
} from "./shared/ColumnHelper"
import {
  getCustomRangeFilterListOptions,
  getRangeFilterOptions,
  priceRender,
} from "./shared/FilterHelper"
import ProvideBookData from "./shared/BookDataProvider"

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
              to={`/vehicle-attachments/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}
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
          customBodyRender: (value, tableMeta) =>
            `${tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""}${(value &&
              value.toLocaleString &&
              value.toLocaleString()) ||
              value}`,
          ...PRICE_FILTER_OPTIONS,
        },
      },
      {
        label: "HP",
        name: "hp",
        options: { customBodyRender: humanizedNumberRender },
      },
      {
        label: "Rarity",
        name: "rarity",
        options: { customBodyRender: humanizedNumberRender },
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
