import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import SEO from "./SEO"

const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
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
          style={{ color: "rgb(210, 210, 210)" }}
          className={classes.posTop}
        >
          Index: {item[key]}
        </Typography>
      )
    default:
      return (
        <Typography key={key}>
          <span className={classes.label}>{capitalize(key)}:</span> {item[key]}
        </Typography>
      )
  }
}

export default ({ item }) => {
  const classes = useStyles()

  return (
    <>
      <SEO title={item.name} />
      <Card className={classes.root}>
        <CardContent>
          {Object.keys(item).map(key => {
            return renderField({ key, item, classes })
          })}
        </CardContent>
      </Card>
    </>
  )
}
