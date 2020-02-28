import React, { useState, useEffect } from "react"
import { Index } from "elasticlunr"
import { navigate } from "gatsby"

import Grid from "@material-ui/core/Grid"
import InputAdornment from "@material-ui/core/InputAdornment"
import Search from "@material-ui/icons/Search"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

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

export default function SearchHooks({ searchIndex, location }) {
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
            <>
              <li key={page.generatedId}>
                <Link to={page.link}>{page.name}</Link> - {page.resourceType}
              </li>
            </>
          ))}
        </ul>
      </Grid>
    </>
  )
}
