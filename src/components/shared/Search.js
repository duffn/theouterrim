import React, { useState, useEffect } from "react"
import { Index } from "elasticlunr"

import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import LinkOutlined from "@material-ui/icons/LinkOutlined"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"

import CopyToClipboard from "./CopyToClipboard"
import Link from "./Link"
import SEO from "./SEO"
import Title from "./Title"

export default function SearchComponent({ searchIndex, location }) {
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
          <Title>
            Results for "{searchQuery}"{" "}
            <CopyToClipboard>
              {({ copy }) => (
                <IconButton
                  component="span"
                  onClick={() => copy(location.href)}
                  style={{ cursor: "pointer" }}
                >
                  <LinkOutlined />
                </IconButton>
              )}
            </CopyToClipboard>
          </Title>
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
