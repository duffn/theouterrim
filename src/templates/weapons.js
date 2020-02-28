import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  const weapon = data.weaponsYaml
  const metaDescription = `${weapon.name} is a ${weapon.skill} ${weapon.category} Weapon. | Stats from The Outer Rim.`

  return (
    <Dashboard>
      <IndividualCard
        item={weapon}
        resourceType="Weapon"
        metaDescription={metaDescription}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    weaponsYaml(generatedId: { eq: $generatedId }) {
      name
      category
      skill
      damage
      crit
      range
      encumbrance
      hp
      price
      restricted
      rarity
      special
      index
    }
  }
`
