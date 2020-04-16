import React from "react"
import Link from "./shared/Link"
import {
  GENERATED_ID_COL_INDEX,
  makeColumns,
  indexRender,
  ColumnProviderPropTypes,
  PRICE_FILTER_OPTIONS,
  humanizedNumberRender,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

import { slugify } from "../utils/slugify"

function VehicleWeaponsColumnProvider({ children, currentBook, metadata }) {
  let bookData = ProvideBookData()
  let columns = makeColumns(
    [
      {
        label: "Name",
        name: "name",
        options: {
          customBodyRender: (value, tableMeta) => (
            <Link
              to={`/vehicle-weapons/${
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
      { label: "Category", name: "category" },
      { label: "Range", name: "range" },
      {
        label: "Damage",
        name: "damage",
        options: { customBodyRender: humanizedNumberRender },
      },
      {
        label: "Crit",
        name: "crit",
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
            }${
              (value && value.toLocaleString && value.toLocaleString()) || value
            }`,
          ...PRICE_FILTER_OPTIONS,
        },
      },
      {
        label: "Rarity",
        name: "rarity",
        options: { customBodyRender: humanizedNumberRender },
      },
      { label: "Qualities", name: "qualities" },
      { label: "Compatible Silhouette", name: "compatibleSilhouette" },
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

VehicleWeaponsColumnProvider.propTypes = {
  ...ColumnProviderPropTypes,
}

export default VehicleWeaponsColumnProvider
