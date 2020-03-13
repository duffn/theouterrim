import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  RESTRICTED_COL_INDEX,
  indexRender,
} from "./shared/ColumnHelper"
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
      { label: "Silhouette", name: "silhouette" },
      { label: "Speed", name: "speed" },
      { label: "Handling", name: "handling" },
      { label: "Armor", name: "armor" },
      { label: "HTT", name: "htt" },
      { label: "SST", name: "sst" },
      { label: "Defense", name: "defense", options: { sort: false } },
      { label: "Sensors", name: "sensors" },
      { label: "Crew", name: "crew" },
      { label: "Encum.", name: "encumbrance" },
      { label: "Passengers", name: "passengers" },
      {
        label: "Price",
        name: "price",
        options: {
          customBodyRender: (value, tableMeta) =>
            `${
              tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""
            }${value.toLocaleString()}`,
        },
      },
      { label: "Rarity", name: "rarity" },
      { label: "HP", name: "hp" },
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
