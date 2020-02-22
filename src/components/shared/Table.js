import React from "react"
import MaterialTable from "material-table"
import MUIDatatable from "mui-datatables"
import Typography from "@material-ui/core/Typography"

export default function Table({ title, data, columns, marginTop, grouping }) {
  return (
    <MUIDatatable
      style={{
        maxWidth: "100%",
        width: "100%",
        marginBottom: "1rem",
        marginTop: marginTop != undefined ? "1rem" : null,
      }}
      //stickyHeader
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
        sort: true,
        download: true,
        downloadOptions: {
          filename: `${title.replace(" ", "-")}_download`
        },
        rowsPerPage: 25,
        rowsPerPageOptions: [25, 50, 100, { value: -1, label: "All"}],
        setTableProps: () => ({
          size: "small" //for "dense" look
        })
      }}
    />
  )
}
