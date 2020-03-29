import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
  humanizedNumberRender,
  priceRender,
} from "./shared/ColumnHelper"
import {
  PRICE_FILTER_OPTIONS,
  getRangeFilterOptions,
} from "./shared/FilterHelper"
import ProvideBookData from "./shared/BookDataProvider"

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
              to={`/starships/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}
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
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Silhouette"),
        },
      },
      {
        label: "Speed",
        name: "speed",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Speed"),
        },
      },
      {
        label: "Handling",
        name: "handling",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Handling"),
        },
      },
      {
        label: "Armor",
        name: "armor",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Armor"),
        },
      },
      {
        label: "HTT",
        name: "htt",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("HTT"),
        },
      },
      {
        label: "SST",
        name: "sst",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("SST"),
        },
      },
      { label: "Defense", name: "defense", options: { sort: false } },
      { label: "Sensors", name: "sensors" },
      {
        label: "Crew",
        name: "crew",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Crew"),
        },
      },
      {
        label: "Encum.",
        name: "encumbrance",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Encum."),
        },
      },
      {
        label: "Passengers",
        name: "passengers",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Passengers"),
        },
      },
      {
        label: "Price",
        name: "price",
        options: {
          customBodyRender: priceRender,
          ...PRICE_FILTER_OPTIONS,
        },
      },
      {
        label: "Rarity",
        name: "rarity",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("Rarity"),
        },
      },
      {
        label: "HP",
        name: "hp",
        options: {
          customBodyRender: humanizedNumberRender,
          ...getRangeFilterOptions("HP"),
        },
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
