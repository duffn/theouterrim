import React from "react"
import Link from "./shared/Link"
import {
  GENERATED_ID_COL_INDEX,
  makeColumns,
  indexRender,
  damageRender,
  ColumnProviderPropTypes,
  PRICE_FILTER_OPTIONS
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

function WeaponsColumnProvider({ children, currentBook, metadata }) {
  let bookData = ProvideBookData()
  let columns = makeColumns([
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link to={`/weapons/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    { label: "Category", name: "category" },
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
    { label: "Encum.", name: "encumbrance" },
    { label: "HP", name: "hp" },
    {
      label: "Price",
      name: "price",
      options: {
        customBodyRender: (value, tableMeta) =>
          `${
            metadata[tableMeta.rowData[GENERATED_ID_COL_INDEX]].isRestricted
              ? "(R) "
              : ""
          }${value.toLocaleString()}`,
          ...PRICE_FILTER_OPTIONS
      },
    },
    { label: "Rarity", name: "rarity" },
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
  ], true)

  return React.cloneElement(React.Children.only(children), { columns, metadata })
}

WeaponsColumnProvider.propTypes = {
  ...ColumnProviderPropTypes,
}

export default WeaponsColumnProvider
