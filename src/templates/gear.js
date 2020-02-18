import React from "react"
import { graphql } from "gatsby"

import Dashboard from "../components/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.gearYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    gearYaml(generatedId: { eq: $generatedId }) {
      name
      category
      price
      encumbrance
      rarity
      index
    }
  }
`
