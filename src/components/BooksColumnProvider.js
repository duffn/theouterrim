import React from "react"
import Link from "./shared/Link"
import { makeColumns, GENERATED_ID_COL_INDEX } from "./shared/ColumnHelper"

export default function BooksColumnProvider({children}){
  let columns = makeColumns([
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link to={`/books/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    { label: "System", name: "system" },
    { label: "Key", name: "key", options: { filter: false } },
  ])

  return React.cloneElement(React.Children.only(children), { columns })
}
