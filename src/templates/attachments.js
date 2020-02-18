import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.attachmentsYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    attachmentsYaml(generatedId: { eq: $generatedId }) {
      name
      category
      price
      encumbrance
      hp
      rarity
      index
    }
  }
`
