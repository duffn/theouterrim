import React from "react"
import MUIDatatable from "mui-datatables"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import ProvideBookData from "./BookDataProvider"
import { GENERATED_ID_COL_INDEX } from "./ColumnHelper"

export default function Table({
  title,
  data,
  columns,
  metadata,
  marginTop,
  grouping,
}) {
  let bookData = ProvideBookData()

  let getMuiTheme = () => {
    let isMobile = useMediaQuery(theme => theme.breakpoints.down("xs"))

    return createMuiTheme({
      overrides: {
        MUIDataTable: {
          responsiveScrollFullHeight: {
            width: "100%",
            overflow: "initial",
            overflowX: "initial",
          },
          paper: {
            marginBottom: "1rem",
            marginTop: marginTop != undefined ? "1rem" : null,
            minWidth: "100%",
            /* Following are to fix an issue with how scrollFullHeight displays the paging controls */
            display: "flex",
            flexDirection: "column",
          },
        },
        MUIDataTableHeadCell: {
          fixedHeaderYAxis: {
            top: isMobile ? 56 : 64,
            "&&:first-child": {
              left: 0,
              zIndex: 200,
            },
          },
        },
        MUIDataTableBodyCell: {
          root: {
            "&&:nth-child(2)": {
              position: "sticky",
              left: 0,
              backgroundColor: "#FFFFFF",
            },
          },
        },
        MUIDataTableBodyRow: {
          root: {
            "&&:hover": {
              backgroundColor: "#EEEEEE",
            },
            "&&:hover>td:nth-child(2)": {
              backgroundColor: "#EEEEEE",
            },
          },
        },
      },
    })
  }

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
          customSort: (data, colIndex, order) => {
            switch (columns[colIndex].name) {
              case "damage": {
                return data.sort((a, b) => {
                  let aData =
                    a.data[colIndex] === null ||
                    typeof a.data[colIndex] === "undefined"
                      ? ""
                      : a.data[colIndex]
                  let bData =
                    b.data[colIndex] === null ||
                    typeof b.data[colIndex] === "undefined"
                      ? ""
                      : b.data[colIndex]
                  let aMeta = metadata[a.data[GENERATED_ID_COL_INDEX]]
                  let bMeta = metadata[b.data[GENERATED_ID_COL_INDEX]]

                  if (aData === bData) {
                    if (aMeta.isBrawn === true && bMeta.isBrawn !== true)
                      return order === "desc" ? -1 : 1
                    else if (bMeta.isBrawn === true && aMeta.isBrawn !== true)
                      return order === "desc" ? 1 : -1
                  }

                  return (aData - bData) * (order === "desc" ? -1 : 1)
                })
              }
              default: {
                return data.sort((a, b) => {
                  let aData =
                    a.data[colIndex] === null ||
                    typeof a.data[colIndex] === "undefined"
                      ? ""
                      : a.data[colIndex]
                  let bData =
                    b.data[colIndex] === null ||
                    typeof b.data[colIndex] === "undefined"
                      ? ""
                      : b.data[colIndex]
                  return (
                    (typeof aData.localeCompare === "function"
                      ? aData.localeCompare(bData)
                      : aData - bData) * (order === "desc" ? -1 : 1)
                  )
                })
              }
            }
          },
          download: true,
          onDownload: (buildHead, buildBody, columns, data) => {
            let indexCol = columns.findIndex(c => c.name === "index")
            data.forEach(d => {
              d.data[indexCol] = d.data[indexCol].split(",").map(index => {
                let idAndPage = index.split(":").map(s => s.trim())
                return (
                  bookData.allBooksYaml.edges
                    .map(({ node }) => node)
                    .filter(b => b.generatedId === idAndPage[0])[0].name +
                  ":" +
                  idAndPage[1]
                )
              })
            })

            return buildHead(columns) + buildBody(data)
          },
          print: false,
          selectableRows: "none",
          downloadOptions: {
            filename: `${title.replace(" ", "-")}_download.csv`,
          },
          fixedHeaderOptions: {
            xAxis: false,
            yAxis: true,
          },
          rowsPerPage: 25,
          rowsPerPageOptions: [
            25,
            50,
            100,
            { value: data.length, label: "All" },
          ],
          setTableProps: () => ({
            size: "small", //for "dense" look
          }),
          responsive: "scrollFullHeight",
        }}
      />
    </MuiThemeProvider>
  )
}
