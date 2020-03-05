import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data, location }) => {
  return (
    <Dashboard>
      <IndividualCard
        item={data.talentsYaml}
        resourceType="Talent"
        location={location}
      />
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
      generatedId
      index
    }
  }
`
