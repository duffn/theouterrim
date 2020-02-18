import React from "react"
import MaterialTable from "material-table"

export default function Table({ title, data, columns, marginTop }) {
  return (
    <MaterialTable
      style={{
        width: "86.5%",
        marginBottom: "1rem",
        marginTop: marginTop != undefined ? "1rem" : null,
      }}
      title={title}
      columns={columns}
      data={data}
      options={{
        sorting: true,
        exportButton: true,
        pageSize: 25,
        pageSizeOptions: [25, 50, 100],
        padding: "dense",
        emptyRowsWhenPaging: false,
        exportAllData: true,
      }}
    />
  )
}
