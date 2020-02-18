import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.skillsYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    skillsYaml(generatedId: { eq: $generatedId }) {
      name
      characteristic
      type
      index
    }
  }
`
