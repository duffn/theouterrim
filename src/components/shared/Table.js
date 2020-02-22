import React from "react"
import MUIDatatable from "mui-datatables"
import Typography from "@material-ui/core/Typography"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

export default function Table({ title, data, columns, marginTop, grouping }) {
  let getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          responsiveStacked: {
            marginBottom: "1rem",
            marginTop: marginTop != undefined ? "1rem" : null,
            overflow: "initial",
            overflowX: "initial"
          },
        },
        MUIDataTableHeadCell: {
          fixedHeaderYAxis: {
            top: 64
          }
        }
      },
    })

  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDatatable
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
          selectableRows: "none",
          downloadOptions: {
            filename: `${title.replace(" ", "-")}_download`,
          },
          rowsPerPage: 25,
          rowsPerPageOptions: [25, 50, 100, { value: data.length, label: "All" }],
          setTableProps: () => ({
            size: "small", //for "dense" look
          }),
        }}
      />
    </MuiThemeProvider>
  )
}
