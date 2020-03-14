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
          item={data.armorYaml}
          resourceType="Armor"
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    armorYaml(generatedId: { eq: $generatedId }) {
      name
      defense
      soak
      price
      restricted
      encumbrance
      hp
      rarity
      generatedId
      index
    }
  }
`
