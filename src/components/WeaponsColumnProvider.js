import React from "react"
import Link from "./shared/Link"
import {
  GENERATED_ID_COL_INDEX,
  makeColumns,
  indexRender,
  damageRender,
  ColumnProviderPropTypes,
  PRICE_FILTER_OPTIONS,
  humanizedNumberRender,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

function WeaponsColumnProvider({ children, currentBook, metadata }) {
  let bookData = ProvideBookData()
  let columns = makeColumns(
    [
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
      {
        label: "Crit",
        name: "crit",
        options: { customBodyRender: humanizedNumberRender },
      },
      { label: "Range", name: "range" },
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
        label: "Price",
        name: "price",
        options: {
          customBodyRender: (value, tableMeta) =>
            `${
              metadata[tableMeta.rowData[GENERATED_ID_COL_INDEX]].isRestricted
                ? "(R) "
                : ""
            }${(value && value.toLocaleString && value.toLocaleString()) ||
              value}`,
          ...PRICE_FILTER_OPTIONS,
        },
      },
      {
        label: "Rarity",
        name: "rarity",
        options: { customBodyRender: humanizedNumberRender },
      },
      { label: "Special", name: "special" },
      {
        label: "Notes",
        name: "notes",
        options: { filter: false, sort: false },
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

  return React.cloneElement(React.Children.only(children), {
    columns,
    metadata,
  })
}

WeaponsColumnProvider.propTypes = {
  ...ColumnProviderPropTypes,
}

export default WeaponsColumnProvider
