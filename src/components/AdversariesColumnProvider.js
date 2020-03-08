import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

export default function AdversariesColumnProvider({ children, currentBook }) {
  let bookData = ProvideBookData()

  let columns = makeColumns([
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link
            to={`/adversaries/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}
          >
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    { label: "Level", name: "level" },
    { label: "Skills", name: "skills" },
    { label: "Talents", name: "talents" },
    { label: "Abilities", name: "abilities" },
    { label: "Equipment", name: "equipment" },
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
