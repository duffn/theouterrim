import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import Table from "../components/shared/Table"
import { adversariesWeaponsColumns } from "../components/AdversariesWeapons"
import { weaponsColumns } from "../components/Weapons"
import IndividualCard from "../components/shared/IndividualCard"
import Grid from "@material-ui/core/Grid"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.qualitiesYaml} resourceType="Quality" />
      <Grid container item xs={12}>
        <Table
          marginTop
          title="Weapons"
          columns={weaponsColumns}
          data={data.allWeaponsYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          marginTop
          title="Adversaries Weapons"
          columns={adversariesWeaponsColumns}
          data={data.allAdversariesWeaponsYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
      </Grid>
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
          category
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
    allAdversariesWeaponsYaml(filter: { special: { glob: $quality } }) {
      edges {
        node {
          name
          skill
          damage
          crit
          range
          special
          index
          generatedId
        }
      }
    }
  }
`
