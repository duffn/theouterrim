import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

const AdversariesWeapons = ({ data, location }) => {
  const weapon = data.adversariesWeaponsYaml
  const metaDescription = `${weapon.name} is an ${weapon.range} range Adversary Weapon with ${weapon.damage} damage and ${weapon.crit} crit.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={weapon}
          resourceType="Adversary Weapon"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query ($generatedId: String!) {
    adversariesWeaponsYaml(generatedId: { eq: $generatedId }) {
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

export default AdversariesWeapons
