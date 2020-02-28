import React, { useState, useEffect } from "react"
import { Index } from "elasticlunr"
import { navigate } from "gatsby"

import Grid from "@material-ui/core/Grid"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import InputAdornment from "@material-ui/core/InputAdornment"
import Search from "@material-ui/icons/Search"
import TextField from "@material-ui/core/TextField"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"
import { withStyles, makeStyles } from "@material-ui/core/styles"

import Link from "./Link"
import SEO from "./SEO"
import Title from "./Title"

const useStyles = makeStyles(theme => ({
  listItem: {
    listStyleType: "none",
    maxHeight: "600px",
    minHeight: "600px",
    paddingLeft: "0px",
    overflow: "auto",
  },
}))

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 260,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip)

export default function SearchComponent({ searchIndex, location }) {
  const classes = useStyles()

  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const searchQuery = new URLSearchParams(location.search).get("q") || ""
  let index

  useEffect(() => {
    index = getOrCreateIndex()

    setQuery(searchQuery)
    setResults(
      index
        .search(searchQuery, { expand: true })
        .map(({ ref }) => index.documentStore.getDoc(ref))
    )
  }, [location.search])

  function getOrCreateIndex() {
    return index ? index : Index.load(searchIndex)
  }

  return (
    <>
      <Grid container item xs={12}>
        <SEO title="Search" />
        <Title>Search The Outer Rim</Title>
        <HtmlTooltip
          title={
            <ul>
              <li>
                Search through weapons, creatures, starships, <i>everything</i>{" "}
                right here.
              </li>
              <li>Search is by name of the item only.</li>
              <li>
                The search results may be scrollable. If you don't see something
                you think should be there, scroll down!
              </li>
            </ul>
          }
          style={{ marginLeft: "10px" }}
        >
          <HelpOutlineIcon />
        </HtmlTooltip>
      </Grid>

      <Grid container item xs={12}>
        <TextField
          id="search-input"
          label="Search"
          variant="outlined"
          value={query}
          onChange={e =>
            navigate(`/search/?q=${encodeURIComponent(e.target.value)}`)
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            autoCapitalize: "off",
            autoCorrect: "off",
            autoComplete: "off",
          }}
        />
      </Grid>
      {results.length === 0 && (
        <Grid container item xs={12}>
          <Typography>No results found.</Typography>
        </Grid>
      )}
      <Grid container item xs={12}>
        <ul className={classes.listItem}>
          {results.map(page => (
            <li key={page.generatedId}>
              <Link to={page.link}>{page.name}</Link> - {page.resourceType}
            </li>
          ))}
        </ul>
      </Grid>
    </>
  )
}
