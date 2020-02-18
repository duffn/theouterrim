import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../../components/Dashboard"
import SEO from "../../components/SEO"

const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
  pos: {
    marginBottom: 12,
  },
  posTop: {
    marginTop: 12,
  },
})

function capitalize(s) {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function renderField({ key, item, classes }) {
  console.log(item)

  switch (key) {
    case "name":
      return (
        <Typography key={key} variant="h5" component="h2">
          {item[key]}
        </Typography>
      )
    case "category":
      return (
        <Typography
          key={key}
          variant="h6"
          component="h2"
          className={classes.pos}
        >
          {item[key]}
        </Typography>
      )
    case "index":
      return (
        <Typography key={key} color="textSecondary" className={classes.posTop}>
          Index: {item[key]}
        </Typography>
      )
    default:
      return (
        <Typography key={key}>
          {capitalize(key)}: {item[key]}
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
