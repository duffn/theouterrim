import { graphql } from "gatsby"
import React from "react"

import { abilitiesColumns } from "../components/Abilities"
import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"

export default function Abilities({ data }) {
  return (
    <Dashboard>
      <SEO title="Abilities" />
      <Table
        title="Abilities"
        columns={abilitiesColumns}
        grouping="false"
        data={data.allAbilitiesYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
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
