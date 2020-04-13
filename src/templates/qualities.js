import { graphql } from "gatsby"
import React from "react"
import Dashboard from "../components/shared/Dashboard"
import Table from "../components/shared/Table"
import IndividualCard from "../components/shared/IndividualCard"
import Grid from "@material-ui/core/Grid"
import WeaponsColumnProvider from "../components/WeaponsColumnProvider"
import AdversariesWeaponsColumnProvider from "../components/AdversariesWeaponsColumnProvider"
import { ThemeProvider } from "../components/shared/ThemeContext"

import { indefinite } from "../utils/indefinite"

export default ({ data, location }) => {
  const quality = data.qualitiesYaml

  const rank = quality.ranked === `Yes` ? `ranked` : `unranked`
  const metaDescription = `${quality.name} is ${indefinite(rank)} ${rank} ${
    quality.active
  } Quality.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={quality}
          resourceType="Quality"
          metaDescription={metaDescription}
          location={location}
        />
        <Grid container item xs={12}>
          <WeaponsColumnProvider
            metadata={data.allWeaponsYaml.nodes.reduce((acc, cur) => {
              acc[cur.generatedId] = {
                isRestricted: cur.restricted,
                isBrawn: cur.brawn,
              }
              return acc
            }, {})}
          >
            <Table title="Weapons" data={data.allWeaponsYaml.nodes} />
          </WeaponsColumnProvider>
          <AdversariesWeaponsColumnProvider
            metadata={data.allAdversariesWeaponsYaml.nodes.reduce(
              (acc, cur) => {
                acc[cur.generatedId] = {
                  isBrawn: cur.brawn,
                }
                return acc
              },
              {}
            )}
          >
            <Table
              title="Adversaries Weapons"
              data={data.allAdversariesWeaponsYaml.nodes}
            />
          </AdversariesWeaponsColumnProvider>
        </Grid>
      </Dashboard>
    </ThemeProvider>
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
      nodes {
        name
        category
        skill
        damage
        brawn
        crit
        range
        encumbrance
        hp
        price
        restricted
        rarity
        special
        index
        generatedId
      }
    }
    allAdversariesWeaponsYaml(filter: { special: { glob: $quality } }) {
      nodes {
        name
        skill
        damage
        brawn
        crit
        range
        special
        index
        generatedId
      }
    }
  }
`
