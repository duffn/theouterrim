import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={data.starshipsYaml}
          resourceType="Starship"
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    starshipsYaml(generatedId: { eq: $generatedId }) {
      name
      category
      manufacturer
      model
      silhouette
      speed
      handling
      armor
      htt
      sst
      defense
      sensors
      crew
      encumbrance
      passengers
      price
      rarity
      hp
      weapons
      hyperdrive
      navicomputer
      notes
      restricted
      index
      generatedId
    }
  }
`
