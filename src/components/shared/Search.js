import React, { useState, useEffect } from "react"
import { Index } from "elasticlunr"
import { navigate } from "gatsby"

// import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
// import ListItem from "@material-ui/core/ListItem"
// import List from "@material-ui/core/List"
// import ListItemText from "@material-ui/core/ListItemText"
import InputAdornment from "@material-ui/core/InputAdornment"
import Search from "@material-ui/icons/Search"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Link from "./Link"
import SEO from "./SEO"

const useStyles = makeStyles(theme => ({
  listItem: {
    listStyleType: "none",
    maxHeight: "600px",
    minHeight: "600px",
    minWidth: "375px",
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
      <Grid container item xs={12} justify="center">
        <SEO title="Search | The Outer Rim" />
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
          }}
        />
      </Grid>
      <Grid container item xs={12} justify="center">
        {/* <List
          style={{
            maxHeight: "600px",
            minHeight: "600px",
            overflow: "auto",
          }}
        > */}
        <ul className={classes.listItem}>
          {results.map(page => (
            <>
              <li key={page.generatedId}>
                <Link to={page.link}>{page.name}</Link> - {page.resourceType}
              </li>
              {/* <ListItem
                color="inherit"
                button
                component={Link}
                to={page.link}
                key={page.generatedId}
              >
                <ListItemText
                  primary={
                    <>
                      <Typography>{page.name}</Typography>
                      <Typography
                        style={{
                          fontSize: "0.75rem",
                          color: "rgb(210, 210, 210)",
                        }}
                      >
                        {page.resourceType}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider component="li" key={`div_${page.generatedId}`} /> */}
            </>
          ))}
        </ul>
        {/* </List> */}
        {results.length === 0 && <Typography>No results found.</Typography>}
      </Grid>
    </>
  )
}
