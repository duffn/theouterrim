import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.adversariesWeaponsYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    adversariesWeaponsYaml(generatedId: { eq: $generatedId }) {
      name
      skill
      damage
      crit
      range
      special
      index
    }
  }
`
