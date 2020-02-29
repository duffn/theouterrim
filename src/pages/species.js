import { graphql } from "gatsby"
import React from "react"

import { speciesColumns } from "../components/Species"
import StatPage from "../components/shared/StatPage"
import SpeciesColumnProvider from "../components/SpeciesColumnProvider"

export default function Species({ data }) {
  return (
    <SpeciesColumnProvider>
      <StatPage
        title="Species"
        data={data.allSpeciesYaml}
      />
    </SpeciesColumnProvider>
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
