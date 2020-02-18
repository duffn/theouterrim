import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.weaponsYaml} />
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
      rarity
      special
      index
    }
  }
`
