import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

import { slugify } from "../utils/slugify"

export default function QualitiesColumnProvider({ children, currentBook }) {
  let bookData = ProvideBookData()
  let columns = makeColumns([
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link
            to={`/qualities/${
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
    { label: "Active", name: "active" },
    { label: "Ranked", name: "ranked" },
    { label: "Effect", name: "effect", options: { filter: false } },
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
