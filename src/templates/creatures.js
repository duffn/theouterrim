import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.creaturesYaml} resourceType="Creature" />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    creaturesYaml(generatedId: { eq: $generatedId }) {
      name
      level
      skills
      talents
      abilities
      equipment
      index
    }
  }
`
