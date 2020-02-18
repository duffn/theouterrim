import { graphql } from "gatsby"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import Dashboard from "../components/Dashboard"
import Table from "../components/Table"
import SEO from "../components/SEO"
import { weaponsColumns } from "../components/Weapons"

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
  const quality = data.qualitiesYaml

  const classes = useStyles()

  return (
    <Dashboard>
      <SEO title={quality.name} />
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.pos} variant="h5" component="h2">
            {quality.name}
          </Typography>
        </CardContent>
      </Card>
      <Table
        title="Weapons"
        columns={weaponsColumns}
        data={data.allWeaponsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!, $quality: String!) {
    qualitiesYaml(generatedId: { eq: $generatedId }) {
      name
      active
      ranked
      effect
      index
    }
    allWeaponsYaml(filter: { special: { glob: $quality } }) {
      edges {
        node {
          name
          skill
          damage
          crit
          range
          encumbrance
          hp
          price
          rarity
          special
          index
          generatedId
        }
      }
    }
  }
`
