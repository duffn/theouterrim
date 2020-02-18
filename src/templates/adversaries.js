import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.adversariesYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    adversariesYaml(generatedId: { eq: $generatedId }) {
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
