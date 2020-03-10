import React from "react"
import clsx from "clsx"

import { makeStyles } from "@material-ui/core/styles"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import LinkOutlined from "@material-ui/icons/LinkOutlined"
import Typography from "@material-ui/core/Typography"

import CopyToClipboard from "./CopyToClipboard"
import SEO from "./SEO"
import ProvideBookData from "./BookDataProvider"
import Link from "./Link"

const useStyles = makeStyles(theme => ({
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
    color: theme.palette.text.secondary,
  },
  muted: {
    color: "rgb(210, 210, 210)",
  },
  link: {
    float: "right",
    cursor: "pointer",
    color: theme.palette.text.secondary,
    marginTop: "-10px",
  },
  feedback: {
    fontSize: "0.8rem",
  },
}))

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
    // We want these labels capitalized.
    case "hp":
    case "htt":
    case "sst":
    case "wt":
    case "st":
    case "xp":
      return (
        <Typography key={key}>
          <span className={classes.label}>{key.toUpperCase()}:</span>{" "}
          {item[key]}
        </Typography>
      )
    case "index":
      let bookData = ProvideBookData()
      let indices = item[key].split(",")
      return (
        <Typography key={key} className={clsx(classes.posTop, classes.label)}>
          Index:{" "}
          {indices.map((index, count) => {
            let idAndPage = index.split(":").map(s => s.trim())
            let book = bookData.allBooksYaml.edges
              .map(({ node }) => node)
              .filter(node => node.generatedId === idAndPage[0])

            return (
              <span key={count}>
                <Link to={`/books/${idAndPage[0]}/`}>{book[0].name}</Link>:
                {idAndPage[1]}
                {count !== indices.length - 1 ? ", " : ""}
              </span>
            )
          })}
        </Typography>
      )
    case "forceSensitive":
      return (
        <Typography key={key}>
          <span className={classes.label}>Force Sensitive:</span> {item[key]}
        </Typography>
      )
    case "specialAbilities":
      return (
        <Typography key={key}>
          <span className={classes.label}>Special Abilities:</span> {item[key]}
        </Typography>
      )
    case "additionalRules":
      return (
        <Typography key={key}>
          <span className={classes.label}>Additional Rules:</span> {item[key]}
        </Typography>
      )
    case "price":
      return (
        <Typography key={key}>
          <span className={classes.label}>Price:</span>{" "}
          {`${item.restricted ? "(R) " : ""}${item[key].toLocaleString()}`}
        </Typography>
      )
    case "damage":
      return (
        <Typography key={key}>
          <span className={classes.label}>Damage:</span>{" "}
          {`${item.brawn ? "+" : ""}`}
          {item[key]}
        </Typography>
      )
    case "restricted":
    case "brawn":
    case "generatedId":
      return null //don't want to render these fields
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

  const emailBody = encodeURIComponent(`



Thank you for reporting an issue! Please provide details above.
Item: ${item.name} (${resourceType})
ID: ${item.generatedId}`)

  return (
    <>
      <Grid container item xs={12}>
        <SEO title={item.name} />

        <Card>
          <CardContent>
            <Typography gutterBottom className={classes.label}>
              {resourceType}
              <CopyToClipboard>
                {({ copy }) => (
                  <IconButton
                    component="span"
                    onClick={() => copy(location.href)}
                    className={classes.link}
                  >
                    <LinkOutlined fontSize="small" />
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
      <Grid item xs={12}>
        <Link
          className={classes.feedback}
          component="a"
          color="inherit"
          href={`mailto:${encodeURIComponent(
            "feedback@theouterrim.co"
          )}?subject=${encodeURIComponent(
            `Feedback on ${item.name} (${resourceType})`
          )}&body=${emailBody}`}
        >
          Found an error? Report it here.
        </Link>
      </Grid>
    </>
  )
}
