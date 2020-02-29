import React, { useState, useEffect } from "react"
import { Index } from "elasticlunr"

import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"
import { withStyles, makeStyles } from "@material-ui/core/styles"

import Link from "./Link"
import SEO from "./SEO"
import Title from "./Title"

const useStyles = makeStyles(theme => ({
  listItem: {
    listStyleType: "none",
    minHeight: "600px",
    paddingLeft: "0px",
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
  const [loading, setLoading] = useState(true)
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
    setLoading(false)
  }, [location.search])

  function getOrCreateIndex() {
    return index ? index : Index.load(searchIndex)
  }

  return (
    <>
      <Grid container item xs={12}>
        <SEO title="Search" />

        {loading ? (
          <Title>Searching...</Title>
        ) : (
          <Title>Results for "{searchQuery}"</Title>
        )}
      </Grid>

      {!loading && results.length === 0 ? (
        <Grid container item xs={12}>
          <Typography>No results found.</Typography>
        </Grid>
      ) : (
        <Grid container item xs={12}>
          <List>
            {results.map(page => (
              <>
                <ListItem
                  color="inherit"
                  button
                  component={Link}
                  to={page.link}
                  key={page.generatedId}
                >
                  <ListItemText
                    primary={page.name}
                    secondary={page.resourceType}
                  />
                </ListItem>
                <Divider component="li" key={`div_${page.generatedId}`} />
              </>
            ))}
          </List>
        </Grid>
      )}
    </>
  )
}
