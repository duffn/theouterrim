import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { red } from "@material-ui/core/colors"
import CssBaseline from "@material-ui/core/CssBaseline"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import {
  ThemeProvider,
  createMuiTheme,
  useTheme,
} from "@material-ui/core/styles"

export default function TopLayout(props) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  const currentTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#388EFF",
      },
      secondary: {
        main: props.paletteType === "light" ? "#D9435F" : "#DF8898",
      },
      error: {
        main: red.A400,
      },
      type: props.paletteType,
    },
    overrides: {
      MUIDataTable: {
        responsiveScrollFullHeight: {
          width: "100%",
          overflow: "initial",
          overflowX: "initial",
        },
        paper: {
          marginBottom: "1rem",
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
            backgroundColor:
              props.paletteType === "light" ? "#FFFFFF" : "#434343",
          },
        },
      },
      MUIDataTableBodyRow: {
        root: {
          "&&:hover": {
            backgroundColor:
              props.paletteType === "light" ? "#EEEEEE" : "#666666",
          },
          "&&:hover>td:nth-child(2)": {
            backgroundColor:
              props.paletteType === "light" ? "#EEEEEE" : "#666666",
          },
        },
      },
    },
  })

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Saira+Semi+Condensed&amp;display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
