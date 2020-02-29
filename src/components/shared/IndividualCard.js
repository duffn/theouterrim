import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import LinkOutlined from "@material-ui/icons/LinkOutlined"
import Typography from "@material-ui/core/Typography"

import CopyToClipboard from "./CopyToClipboard"
import SEO from "./SEO"

const useStyles = makeStyles({
  category: {
    marginTop: -12,
    marginBottom: 12,
  },
  posTop: {
    marginTop: 12,
  },
  name: {
    fontFamily: "Saira Semi Condensed",
    marginBottom: 12,
  },
  label: {
    color: "rgba(0, 0, 0, 0.54)",
  },
  muted: {
    color: "rgb(210, 210, 210)",
  },
})

function capitalize(s) {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function renderField({ key, item, classes }) {
  switch (key) {
    case "name":
      return (
        <Typography
          className={classes.name}
          key={key}
          variant="h5"
          component="h2"
        >
          {item[key]}
        </Typography>
      )
    case "category":
      return (
        <Typography
          key={key}
          variant="h6"
          component="h2"
          className={classes.category}
        >
          {item[key]}
        </Typography>
      )
    // A silly case for HP, so both letters are capitalized.
    case "hp":
      return (
        <Typography key={key}>
          <span className={classes.label}>HP:</span> {item[key]}
        </Typography>
      )
    case "index":
      return (
        <Typography
          key={key}
          className={[classes.posTop, classes.muted].join(" ")}
        >
          Index: {item[key]}
        </Typography>
      )
    case "forceSensitive":
      return (
        <Typography key={key}>
          <span className={classes.label}>Force Sensitive:</span> {item[key]}
        </Typography>
      )
    case "price":
      return (
        <Typography key={key}>
          <span className={classes.label}>Price:</span>{" "}
          {`${item.restricted ? "(R) " : ""}${item[key].toLocaleString()}`}
        </Typography>
      )
    case "restricted":
      return null //don't want to render this field as it's displayed with the price
    default:
      return (
        <Typography key={key}>
          <span className={classes.label}>{capitalize(key)}:</span> {item[key]}
        </Typography>
      )
  }
}

export default ({ item, resourceType, location }) => {
  const classes = useStyles()

  return (
    <Grid container item xs={12}>
      <SEO title={item.name} />

      <Card>
        <CardContent>
          <Typography gutterBottom className={classes.muted}>
            {resourceType}
            <CopyToClipboard>
              {({ copy }) => (
                <IconButton
                  component="span"
                  onClick={() => copy(location.href)}
                  style={{ float: "right", cursor: "pointer" }}
                >
                  <LinkOutlined />
                </IconButton>
              )}
            </CopyToClipboard>
          </Typography>
          {Object.keys(item).map(key => {
            return renderField({ key, item, classes })
          })}
        </CardContent>
      </Card>
    </Grid>
  )
}
