import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"

const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default ({ data }) => {
  const gear = data.gearYaml

  const classes = useStyles()

  return (
    <Dashboard>
      <SEO title={gear.name} />
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.pos} variant="h5" component="h2">
            {gear.name}
          </Typography>
          <Typography color="textSecondary">Price: {gear.price}</Typography>
          <Typography color="textSecondary">Rarity: {gear.rarity}</Typography>
          <Typography className={classes.pos} color="textSecondary">
            Encumbrance: {gear.encumbrance}
          </Typography>
          <Typography>Index: {gear.index}</Typography>
        </CardContent>
      </Card>
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    gearYaml(generatedId: { eq: $generatedId }) {
      name
      category
      price
      encumbrance
      rarity
      index
    }
  }
`
