import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  RESTRICTED_COL_INDEX,
  indexRender,
  PRICE_FILTER_OPTIONS,
  humanizedNumberRender,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

import { slugify } from "../utils/slugify"

export default function StarshipsColumnProvider({ children, currentBook }) {
  let bookData = ProvideBookData()
  let columns = makeColumns(
    [
      {
        label: "Name",
        name: "name",
        options: {
          customBodyRender: (value, tableMeta) => (
            <Link
              to={`/starships/${
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
      { label: "Manufacturer", name: "manufacturer" },
      { label: "Model", name: "model", options: { filter: false } },
      {
        label: "Silhouette",
        name: "silhouette",
        options: { customBodyRender: humanizedNumberRender },
      },
      {
        label: "Speed",
        name: "speed",
        options: { customBodyRender: humanizedNumberRender },
      },
      {
        label: "Handling",
        name: "handling",
        options: { customBodyRender: humanizedNumberRender },
      },
      {
        label: "Armor",
        name: "armor",
        options: { customBodyRender: humanizedNumberRender },
      },
      {
        label: "HTT",
        name: "htt",
        options: { customBodyRender: humanizedNumberRender },
      },
      {
        label: "SST",
        name: "sst",
        options: { customBodyRender: humanizedNumberRender },
      },
      { label: "Defense", name: "defense", options: { sort: false } },
      { label: "Sensors", name: "sensors" },
      {
        label: "Crew",
        name: "crew",
        options: { customBodyRender: humanizedNumberRender },
      },
      {
        label: "Encum.",
        name: "encumbrance",
        options: { customBodyRender: humanizedNumberRender },
      },
      {
        label: "Passengers",
        name: "passengers",
        options: { customBodyRender: humanizedNumberRender },
      },
      {
        label: "Price",
        name: "price",
        options: {
          customBodyRender: (value, tableMeta) =>
            `${tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""}${
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
      {
        label: "HP",
        name: "hp",
        options: { customBodyRender: humanizedNumberRender },
      },
      { label: "Weapons", name: "weapons" },
      { label: "Hyperdrive", name: "hyperdrive" },
      { label: "Navicomputer", name: "navicomputer" },
      { label: "Additional Rules", name: "additionalRules" },
      {
        label: "Notes",
        name: "notes",
        options: { sort: false, filter: false },
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

  return React.cloneElement(React.Children.only(children), { columns })
}
