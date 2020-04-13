import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

import { indefinite } from "../utils/indefinite"

export default ({ data, location }) => {
  const starship = data.starshipsYaml
  const metaDescription = `${starship.name} is ${indefinite(starship.model)} ${
    starship.model
  } model ${starship.category} Starship built by ${starship.manufacturer}.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={starship}
          resourceType="Starship"
          metaDescription={metaDescription}
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
      additionalRules
      notes
      restricted
      index
      generatedId
    }
  }
`
