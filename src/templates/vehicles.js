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
          item={data.vehiclesYaml}
          resourceType="Vehicle"
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    vehiclesYaml(generatedId: { eq: $generatedId }) {
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
      notes
      restricted
      index
      generatedId
    }
  }
`
