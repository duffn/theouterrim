import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
  damageRender,
  ColumnProviderPropTypes
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

function AdversariesWeaponsColumnProvider({ children, currentBook, metadata }) {
  let bookData = ProvideBookData()
  let columns = makeColumns([
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link
            to={`/adversaries-weapons/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}
          >
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    { label: "Skill", name: "skill" },
    {
      label: "Damage",
      name: "damage",
      options: {
        customBodyRender: (value, tableMeta) =>
          damageRender(value, tableMeta, metadata),
      },
    },
    { label: "Crit", name: "crit" },
    { label: "Range", name: "range" },
    { label: "Special", name: "special" },
    {
      label: "Index",
      name: "index",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) =>
          indexRender(value, tableMeta, bookData, currentBook),
      },
    },
  ])

  return React.cloneElement(React.Children.only(children), { columns, metadata })
}

AdversariesWeaponsColumnProvider.propTypes = {
  ...ColumnProviderPropTypes,
}

export default AdversariesWeaponsColumnProvider
