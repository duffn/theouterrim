import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.vehicleAttachmentsYaml} />
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
