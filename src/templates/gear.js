import React from "react"
import { graphql } from "gatsby"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

const GearTemplate = ({ data, location }) => {
  const gear = data.gearYaml
  const metaDescription = `${gear.name} is an Adversary Gear.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={gear}
          resourceType="Gear"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query ($generatedId: String!) {
    gearYaml(generatedId: { eq: $generatedId }) {
      name
      category
      price
      restricted
      encumbrance
      rarity
      notes
      generatedId
      index
    }
  }
`

export default GearTemplate
