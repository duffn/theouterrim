import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.adversariesGearYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    adversariesGearYaml(generatedId: { eq: $generatedId }) {
      name
      encumbrance
      index
    }
  }
`
