import { graphql } from "gatsby"
import React from "react"

import AbilitiesColumnProvider from "../components/AbilitiesColumnProvider"
import StatPage from "../components/shared/StatPage"

export default function Abilities({ data }) {
  return (
    <AbilitiesColumnProvider>
      <StatPage title="Abilities" data={data.allAbilitiesYaml} noGrouping />
    </AbilitiesColumnProvider>
  )
}

export const query = graphql`
  query AbilitiesPageQuery {
    allAbilitiesYaml {
      nodes {
        name
        description
        index
        generatedId
      }
    }
  }
`
