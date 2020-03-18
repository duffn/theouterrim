import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

import { indefinite } from "../utils/indefinite"

export default ({ data, location }) => {
  const weapon = data.weaponsYaml
  const metaDescription = `${weapon.name} is ${indefinite(weapon.skill)} ${
    weapon.skill
  } ${weapon.category} Weapon with ${weapon.damage} damage and ${
    weapon.crit
  } crit.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={weapon}
          resourceType="Weapon"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    weaponsYaml(generatedId: { eq: $generatedId }) {
      name
      category
      skill
      damage
      brawn
      crit
      range
      encumbrance
      hp
      price
      restricted
      rarity
      special
      generatedId
      index
    }
  }
`
