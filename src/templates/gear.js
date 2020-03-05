import React from "react"
import { graphql } from "gatsby"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data, location }) => {
  return (
    <Dashboard>
      <IndividualCard
        item={data.gearYaml}
        resourceType="Gear"
        location={location}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    gearYaml(generatedId: { eq: $generatedId }) {
      name
      category
      price
      restricted
      encumbrance
      rarity
      generatedId
      index
    }
  }
`
