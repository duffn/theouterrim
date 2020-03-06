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
      crew
      passengers
      encumbrance
      handling
      silhouette
      speed
      weapons
      hp
      price
      restricted
      rarity
      navicomputer
      generatedId
      index
    }
  }
`
