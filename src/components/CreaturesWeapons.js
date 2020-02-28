import React from "react"
import Link from "./shared/Link"
import { makeColumns, GENERATED_ID_COL_INDEX } from "./shared/ColumnFactory"

export const creaturesWeaponsColumns = makeColumns([
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link
          to={`/creatures-weapons/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}
        >
          {value}
        </Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Skill", name: "skill" },
  { label: "Damage", name: "damage" },
  { label: "Crit", name: "crit" },
  { label: "Range", name: "range" },
  { label: "Special", name: "special" },
  { label: "Index", name: "index", options: { filter: false } },
])
