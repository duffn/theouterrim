/*
This is taken from the material-ui.com docs. I've left some bits in even though
we're not using them currently, in case we want to in the future. Reference more
here: https://github.com/mui-org/material-ui/blob/dbc1aee89b2a50cf248683639e490caf1202f4b0/docs/src/modules/components/ThemeContext.js
*/
import React from "react"
import Cookies from "js-cookie"
import PropTypes from "prop-types"

import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
  useTheme,
} from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { red } from "@material-ui/core/colors"

const themeInitialOptions = {
  dense: false,
  direction: "ltr",
  paletteColors: {},
  spacing: 8, // spacing unit
}

export const DispatchContext = React.createContext(() => {
  throw new Error("Forgot to wrap component in `ThemeProvider`")
})

if (process.env.NODE_ENV !== "production") {
  DispatchContext.displayName = "ThemeDispatchContext"
}

export function ThemeProvider(props) {
  const { children } = props

  const [themeOptions, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "SET_SPACING":
        return {
          ...state,
          spacing: action.payload,
        }
      case "INCREASE_SPACING": {
        return {
          ...state,
          spacing: state.spacing + 1,
        }
      }
      case "DECREASE_SPACING": {
        return {
          ...state,
          spacing: state.spacing - 1,
        }
      }
      case "SET_DENSE":
        return {
          ...state,
          dense: action.payload,
        }
      case "RESET_DENSITY":
        return {
          ...state,
          dense: themeInitialOptions.dense,
          spacing: themeInitialOptions.spacing,
        }
      case "RESET_COLORS":
        return {
          ...state,
          paletteColors: themeInitialOptions.paletteColors,
        }
      case "CHANGE":
        return {
          ...state,
          paletteType: action.payload.paletteType || state.paletteType,
        }
      default:
        throw new Error(`Unrecognized type ${action.type}`)
    }
  }, themeInitialOptions)

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const preferredType = prefersDarkMode ? "dark" : "light"
  const {
    dense,
    direction,
    paletteColors,
    paletteType = preferredType,
    spacing,
  } = themeOptions

  React.useEffect(() => {
    if (process.browser) {
      const nextPaletteType = Cookies.get("paletteType")

      dispatch({
        type: "CHANGE",
        payload: {
          paletteType: nextPaletteType,
        },
      })
    }
  }, [])

  React.useEffect(() => {
    Cookies.set("paletteType", paletteType, {
      path: "/",
      expires: 365,
    })
  }, [paletteType])

  const thisTheme = useTheme()
  const isMobile = useMediaQuery(thisTheme.breakpoints.down("xs"))

  const theme = React.useMemo(() => {
    const nextTheme = createMuiTheme({
      palette: {
        primary: {
          main: "#388EFF",
        },
        secondary: {
          main: paletteType === "light" ? "#D9435F" : "#DF8898",
        },
        error: {
          main: red.A400,
        },
        type: paletteType,
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
              backgroundColor: paletteType === "light" ? "#FFFFFF" : "#434343",
            },
          },
        },
        MUIDataTableBodyRow: {
          root: {
            "&&:hover": {
              backgroundColor: paletteType === "light" ? "#EEEEEE" : "#666666",
            },
            "&&:hover>td:nth-child(2)": {
              backgroundColor: paletteType === "light" ? "#EEEEEE" : "#666666",
            },
          },
        },
      },
    })

    return nextTheme
  }, [dense, direction, paletteColors, paletteType, spacing])

  return (
    <MuiThemeProvider theme={theme}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </MuiThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

/**
 * @returns {(nextOptions: Partial<typeof themeInitialOptions>) => void}
 */
export function useChangeTheme() {
  const dispatch = React.useContext(DispatchContext)
  return React.useCallback(
    options => dispatch({ type: "CHANGE", payload: options }),
    [dispatch]
  )
}
