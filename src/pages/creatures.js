import { graphql } from "gatsby"
import React from "react"

import { creaturesColumns } from "../components/Creatures"
import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"

export default function Creatures({ data }) {
  return (
    <Dashboard>
      <SEO title="Creatures" />
      <Table
        title="Creatures"
        columns={creaturesColumns}
        data={data.allCreaturesYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query CreaturesPageQuery {
    allCreaturesYaml {
      edges {
        node {
          name
          level
          skills
          talents
          abilities
          equipment
          index
          generatedId
        }
      }
    }
  }
`
