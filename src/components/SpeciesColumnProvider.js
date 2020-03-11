import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
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
    { label: "Player?", name: "player" },
    { label: "WT", name: "wt" },
    { label: "ST", name: "st" },
    { label: "Brawn", name: "brawn" },
    { label: "Agility", name: "agility" },
    { label: "Intellect", name: "intellect" },
    { label: "Cunning", name: "cunning" },
    { label: "Willpower", name: "willpower" },
    { label: "Presence", name: "presence" },
    { label: "XP", name: "xp" },
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
