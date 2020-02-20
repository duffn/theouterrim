import React from "react"
import MaterialTable from "material-table"
import Typography from "@material-ui/core/Typography"

export default function Table({ title, data, columns, marginTop, grouping }) {
  return (
    <MaterialTable
      style={{
        maxWidth: "100%",
        marginBottom: "1rem",
        marginTop: marginTop != undefined ? "1rem" : null,
      }}
      title={
        <Typography
          variant="h6"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontFamily: "Saira Semi Condensed",
          }}
        >
          {title}
        </Typography>
      }
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
        exportFileName: `${title.replace(" ", "-")}_download`,
        grouping: grouping === "false" ? false : true,
      }}
    />
  )
}
