import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

import { indefinite } from "../utils/indefinite"

const VehicleWeaponsTemplate = ({ data, location }) => {
  const vw = data.vehicleWeaponsYaml
  const metaDescription = `${vw.name} is ${indefinite(vw.range)} ${
    vw.range
  } range Vehicle Weapon in the ${vw.category} category.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={vw}
          resourceType="Vehicle Weapon"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query ($generatedId: String!) {
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

export default VehicleWeaponsTemplate
