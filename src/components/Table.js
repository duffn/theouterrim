import React from "react"
import MaterialTable from "material-table"

export default function Table({ title, data, columns }) {
  return (
    <MaterialTable
      style={{ width: "86.5%" }}
      title={title}
      columns={columns}
      data={data}
      options={{
        sorting: true,
        exportButton: true,
        pageSize: 25,
        pageSizeOptions: [25, 50, 100],
        padding: "dense",
      }}
    />
  )
}
