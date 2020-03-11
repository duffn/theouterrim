import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  RESTRICTED_COL_INDEX,
  GENERATED_ID_COL_INDEX,
  indexRender
} from "./shared/ColumnHelper"
import {
  getCustomRangeFilterListOptions,
  getRangeFilterOptions,
  priceRender,
} from "./shared/FilterHelper"
import ProvideBookData from "./shared/BookDataProvider"

export default function VehicleAttachmentsColumnProvider({children, currentBook}) {
  let bookData = ProvideBookData()
  let columns = makeColumns([
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
        customBodyRender: priceRender,
        ...getCustomRangeFilterListOptions("Price"),
        ...getRangeFilterOptions("Price"),
      },
    },
    { label: "HP", name: "hp" },
    { label: "Rarity", name: "rarity" },
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