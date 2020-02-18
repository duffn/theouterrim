import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.adversariesArmorYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    adversariesArmorYaml(generatedId: { eq: $generatedId }) {
      name
      defense
      soak
      encumbrance
      hp
      index
    }
  }
`
