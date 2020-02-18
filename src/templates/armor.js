import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.armorYaml} />
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
      encumbrance
      hp
      rarity
      index
    }
  }
`
