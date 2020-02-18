import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.talentsYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    talentsYaml(generatedId: { eq: $generatedId }) {
      name
      activation
      ranked
      forceSensitive
      index
    }
  }
`
