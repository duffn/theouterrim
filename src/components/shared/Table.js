import React from "react"
import MUIDatatable from "mui-datatables"
import Typography from "@material-ui/core/Typography"

import ProvideBookData from "./BookDataProvider"

export default function Table({ title, data, columns, grouping }) {
  const bookData = ProvideBookData()

  return (
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
        rowsPerPageOptions: [25, 50, 100, { value: data.length, label: "All" }],
        setTableProps: () => ({
          size: "small", //for "dense" look
        }),
        responsive: "scrollFullHeight",
      }}
    />
  )
}
