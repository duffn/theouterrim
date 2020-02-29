import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data, location }) => {
  return (
    <Dashboard>
      <IndividualCard
        item={data.vehicleAttachmentsYaml}
        resourceType="Vehicle Attachment"
        location={location}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    vehicleAttachmentsYaml(generatedId: { eq: $generatedId }) {
      name
      price
      restricted
      hp
      rarity
      index
    }
  }
`
