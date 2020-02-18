import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.creaturesYaml} />
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
