import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data, location }) => {
  return (
    <Dashboard>
      <IndividualCard
        item={data.adversariesWeaponsYaml}
        resourceType="Adversary Weapon"
        location={location}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    adversariesWeaponsYaml(generatedId: { eq: $generatedId }) {
      name
      skill
      damage
      brawn
      crit
      range
      special
      generatedId
      index
    }
  }
`
