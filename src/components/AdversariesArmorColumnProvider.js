import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
  humanizedNumberRender,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

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
            to={`/adversaries-armor/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}
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
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "Soak",
      name: "soak",
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "Encum.",
      name: "encumbrance",
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "HP",
      name: "hp",
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
  ])

  return React.cloneElement(React.Children.only(children), { columns })
}
