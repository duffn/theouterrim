import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data, location }) => {
  return (
    <Dashboard>
      <IndividualCard
        item={data.weaponAttachmentsYaml}
        resourceType="Weapon Attachment"
        location={location}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    weaponAttachmentsYaml(generatedId: { eq: $generatedId }) {
      name
      category
      price
      restricted
      encumbrance
      hp
      rarity
      generatedId
      index
    }
  }
`
