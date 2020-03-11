import React from "react"
import Link from "./shared/Link"
import {
  RESTRICTED_COL_INDEX,
  GENERATED_ID_COL_INDEX,
  makeColumns,
  indexRender
} from "./shared/ColumnHelper"
import {
  getCustomRangeFilterListOptions,
  getRangeFilterOptions,
  priceRender,
} from "./shared/FilterHelper"
import ProvideBookData from "./shared/BookDataProvider"

export default function WeaponsColumnProvider({children, currentBook}) {
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
    { label: "Damage", name: "damage" },
    { label: "Crit", name: "crit" },
    { label: "Range", name: "range" },
    { label: "Encum.", name: "encumbrance" },
    { label: "HP", name: "hp" },
    {
      label: "Price",
      name: "price",
      options: {
        customBodyRender: priceRender,
        ...getCustomRangeFilterListOptions("Price"),
        ...getRangeFilterOptions("Price"),
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

  return React.cloneElement(React.Children.only(children), { columns })
}
