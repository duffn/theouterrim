import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  const armor = data.armorYaml
  const metaDescription = `${armor.name} is an Armor with ${armor.defense} defense and ${armor.soak} soak.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={armor}
          resourceType="Armor"
          metaDescription={metaDescription}
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
      notes
      generatedId
      index
    }
  }
`
