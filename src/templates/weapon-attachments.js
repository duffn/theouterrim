import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.weaponAttachmentsYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    weaponAttachmentsYaml(generatedId: { eq: $generatedId }) {
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
