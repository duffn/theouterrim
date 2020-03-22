import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
  humanizedNumberRender,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"

export default function SpeciesColumnProvider({ children, currentBook }) {
  let bookData = ProvideBookData()
  let columns = makeColumns([
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link to={`/species/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    {
      label: "WT",
      name: "wt",
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "ST",
      name: "st",
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "Brawn",
      name: "brawn",
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "Agility",
      name: "agility",
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "Intellect",
      name: "intellect",
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "Cunning",
      name: "cunning",
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "Willpower",
      name: "willpower",
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "Presence",
      name: "presence",
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "XP",
      name: "xp",
      options: { customBodyRender: humanizedNumberRender },
    },
    {
      label: "Special Abilities",
      name: "specialAbilities",
      options: { filter: false, sort: false },
    },
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
  ])

  return React.cloneElement(React.Children.only(children), { columns })
}
