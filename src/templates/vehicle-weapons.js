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
          item={data.vehicleWeaponsYaml}
          resourceType="Vehicle Weapon"
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    vehicleWeaponsYaml(generatedId: { eq: $generatedId }) {
      name
      category
      range
      damage
      crit
      price
      restricted
      rarity
      qualities
      compatibleSilhouette
      notes
      index
      generatedId
    }
  }
`
