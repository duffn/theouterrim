import React from "react"
import Link from "./shared/Link"

export const adversariesGearColumns = [
         {
           name: "generatedId",
           options: { display: false, viewColumns: false },
         },
         {
           label: "Name",
           name: "name",
           options: {
             customBodyRender: (value, tableMeta) => (
               <Link to={`/adversaries-gear/${tableMeta.rowData[0]}/`}>
                 {value}
               </Link>
             ),
             sortDirection: "asc",
           },
         },
         { label: "Encum.", name: "encumbrance", numeric: true },
         { label: "Index", name: "index" },
       ]
