import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data, location }) => {
  return (
    <Dashboard>
      <IndividualCard
        item={data.armorYaml}
        resourceType="Armor"
        location={location}
      />
    </Dashboard>
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
      index
    }
  }
`
