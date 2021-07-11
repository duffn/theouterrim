import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

import { indefinite } from "../utils/indefinite"

const CreaturesWeaponsTemplate = ({ data, location }) => {
  const weapon = data.creaturesWeaponsYaml
  const metaDescription = `${weapon.name} is ${indefinite(weapon.range)} ${
    weapon.range
  } range ${weapon.skill} Weapon with ${weapon.damage} damage and ${
    weapon.crit
  } crit.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={weapon}
          resourceType="Creature Weapon"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query ($generatedId: String!) {
    creaturesWeaponsYaml(generatedId: { eq: $generatedId }) {
      name
      skill
      damage
      brawn
      crit
      range
      special
      generatedId
      index
    }
  }
`

export default CreaturesWeaponsTemplate
