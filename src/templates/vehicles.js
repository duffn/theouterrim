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
      crew
      passengers
      speed
      handling
      silhouette
      weapons
      encumbrance
      hp
      price
      restricted
      rarity
      generatedId
      index
    }
  }
`
