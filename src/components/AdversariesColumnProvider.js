import React from "react"
import Link from "./shared/Link"
import {
  makeColumns,
  GENERATED_ID_COL_INDEX,
  indexRender,
  humanizedNumberRender,
} from "./shared/ColumnHelper"
import ProvideBookData from "./shared/BookDataProvider"
import { getRangeFilterOptions } from "./shared/FilterHelper"

export default function AdversariesColumnProvider({ children, currentBook }) {
  let bookData = ProvideBookData()

  let columns = makeColumns([
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link
            to={`/adversaries/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}
          >
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    { label: "Level", name: "level" },
    {
      label: "Soak",
      name: "soak",
      options: { customBodyRender: humanizedNumberRender,
      ...getRangeFilterOptions("Soak") },
    },
    {
      label: "WT",
      name: "wt",
      options: { customBodyRender: humanizedNumberRender,
      ...getRangeFilterOptions("WT") },
    },
    {
      label: "ST",
      name: "st",
      options: { sort: false, customBodyRender: humanizedNumberRender,
      ...getRangeFilterOptions("ST") },
    },
    { label: "M/R", name: "mr" },
    {
      label: "Brawn",
      name: "brawn",
      options: { customBodyRender: humanizedNumberRender,
      ...getRangeFilterOptions("Brawn") },
    },
    {
      label: "Agility",
      name: "agility",
      options: { customBodyRender: humanizedNumberRender,
      ...getRangeFilterOptions("Agility") },
    },
    {
      label: "Intellect",
      name: "intellect",
      options: { customBodyRender: humanizedNumberRender,
      ...getRangeFilterOptions("Intellect") },
    },
    {
      label: "Cunning",
      name: "cunning",
      options: { customBodyRender: humanizedNumberRender,
      ...getRangeFilterOptions("Cunning") },
    },
    {
      label: "Willpower",
      name: "willpower",
      options: { customBodyRender: humanizedNumberRender,
      ...getRangeFilterOptions("Willpower") },
    },
    {
      label: "Presence",
      name: "presence",
      options: { customBodyRender: humanizedNumberRender,
      ...getRangeFilterOptions("Presence") },
    },
    { label: "Skills", name: "skills" },
    { label: "Talents", name: "talents" },
    { label: "Abilities", name: "abilities" },
    { label: "Equipment", name: "equipment" },
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
