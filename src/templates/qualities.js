import { graphql } from "gatsby"
import React from "react"
import Dashboard from "../components/shared/Dashboard"
import Table from "../components/shared/Table"
import IndividualCard from "../components/shared/IndividualCard"
import Grid from "@material-ui/core/Grid"
import WeaponsColumnProvider from "../components/WeaponsColumnProvider"
import AdversariesWeaponsColumnProvider from "../components/AdversariesWeaponsColumnProvider"

export default ({ data, location }) => {
  return (
    <Dashboard>
      <IndividualCard
        item={data.qualitiesYaml}
        resourceType="Quality"
        location={location}
      />
      <Grid container item xs={12}>
        <WeaponsColumnProvider>
          <Table
            title="Weapons"
            data={data.allWeaponsYaml.edges.map(({ node }) => {
              return {
                ...node,
              }
            })}
          />
        </WeaponsColumnProvider>
        <AdversariesWeaponsColumnProvider>
          <Table
            title="Adversaries Weapons"
            data={data.allAdversariesWeaponsYaml.edges.map(({ node }) => {
              return {
                ...node,
              }
            })}
          />
        </AdversariesWeaponsColumnProvider>
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
      generatedId
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
