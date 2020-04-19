import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
  humanizedNumberRender,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"
import { getRangeFilterOptions } from "./shared/FilterHelper"

import { slugify } from "../utils/slugify"

export default function AdversariesArmorColumnProvider({
  children,
  currentBook,
}) {
  let bookData = ProvideBookData()

  let columns = makeColumns([
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link
            to={`/adversaries-armor/${
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
      label: "Defense",
      name: "defense",
      options: { customBodyRender: humanizedNumberRender,
      ...getRangeFilterOptions("Defense") },
    },
    {
      label: "Soak",
      name: "soak",
      options: { customBodyRender: humanizedNumberRender,
      ...getRangeFilterOptions("Soak") },
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
  ])

  return React.cloneElement(React.Children.only(children), { columns })
}
