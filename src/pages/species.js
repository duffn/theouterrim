import { graphql } from "gatsby"
import React from "react"

import { speciesColumns } from "../components/Species"
import StatPage from "../components/shared/StatPage"

export default function Species({ data }) {
  return (
    <StatPage
      title="Species"
      columns={speciesColumns}
      data={data.allSpeciesYaml}
    />
  )
}

export const query = graphql`
  query SpeciesPageQuery {
    allSpeciesYaml {
      edges {
        node {
          name
          player
          index
          generatedId
        }
      }
    }
  }
`
