import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import { speciesColumns } from "../components/Species"
import Table from "../components/Table"

export default function Species({ data }) {
  return (
    <Dashboard>
      <SEO title="Species" />
      <Table
        title="Species"
        columns={speciesColumns}
        data={data.allSpeciesYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
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
