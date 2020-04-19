import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
  damageRender,
  ColumnProviderPropTypes,
  humanizedNumberRender,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"
import { getRangeFilterOptions } from "./shared/FilterHelper"

import { slugify } from "../utils/slugify"

function CreaturesWeaponsColumnProvider({ children, currentBook, metadata }) {
  let bookData = ProvideBookData()
  let columns = makeColumns(
    [
      {
        label: "Name",
        name: "name",
        options: {
          customBodyRender: (value, tableMeta) => (
            <Link
              to={`/creatures-weapons/${
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
      { label: "Skill", name: "skill" },
      {
        label: "Damage",
        name: "damage",
        options: {
          customBodyRender: (value, tableMeta) =>
            damageRender(value, tableMeta, metadata),
          ...getRangeFilterOptions("Damage"),
        },
      },
      {
        label: "Crit",
        name: "crit",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Crit"),
        },
      },
      { label: "Range", name: "range" },
      { label: "Special", name: "special" },
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

CreaturesWeaponsColumnProvider.propTypes = {
  ...ColumnProviderPropTypes,
}

export default CreaturesWeaponsColumnProvider
