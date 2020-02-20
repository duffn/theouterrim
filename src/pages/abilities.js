import { graphql } from "gatsby"
import React from "react"

import { abilitiesColumns } from "../components/Abilities"
import StatPage from "../components/shared/StatPage"

export default function Abilities({ data }) {
  return (
    <StatPage
      title="Abilities"
      columns={abilitiesColumns}
      data={data.allAbilitiesYaml}
      noGrouping
    />
  )
}

export const query = graphql`
  query AbilitiesPageQuery {
    allAbilitiesYaml {
      edges {
        node {
          name
          description
          index
          generatedId
        }
      }
    }
  }
`
