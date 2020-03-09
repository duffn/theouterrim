import React, { useState } from "react"
import { navigate } from "gatsby"
import clsx from "clsx"

import InputAdornment from "@material-ui/core/InputAdornment"
import Grid from "@material-ui/core/Grid"
import SearchIcon from "@material-ui/icons/Search"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"

import { makeStyles } from "@material-ui/core/styles"
import { ThemeProvider } from "../components/shared/ThemeContext"

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center",
    fontFamily: "Saira Semi Condensed",
  },
  center: {
    textAlign: "center",
  },
  textField: {
    width: 240,
  },
  search: {
    marginTop: theme.spacing(12),
  },
}))

export default function Index() {
  const classes = useStyles()

  const [searchQuery, setSearchQuery] = useState("")

  return (
    <ThemeProvider>
      <Dashboard>
        <SEO title="Home" />
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h1" color="primary">
            The Outer Rim
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.center}
            gutterBottom
          >
            Fantasy Flight Games' Star Wars role-playing game stats from The
            Outer Rim.
          </Typography>
          <div className={clsx(classes.center, classes.search)}>
            <form
              onSubmit={event => {
                event.preventDefault()
                navigate(`/search/?q=${searchQuery}`)
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.textField}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                inputProps={{
                  "aria-label": "main search",
                  autoCapitalize: "off",
                  autoCorrect: "off",
                  autoComplete: "off",
                }}
                variant="outlined"
                placeholder="Search..."
                name="q"
              />
            </form>
          </div>
        </Grid>
      </Dashboard>
    </ThemeProvider>
  )
}
