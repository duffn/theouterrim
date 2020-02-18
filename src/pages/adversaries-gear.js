import { graphql } from "gatsby"
import React from "react"

import { adversariesGearColumns } from "../components/AdversariesGear"
import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"

export default function AdversariesGear({ data }) {
  return (
    <Dashboard>
      <SEO title="Adversaries Gear" />
      <Table
        title="Adversaries Gear"
        columns={adversariesGearColumns}
        data={data.allAdversariesGearYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query AdversariesGearPageQuery {
    allAdversariesGearYaml {
      edges {
        node {
          name
          encumbrance
          index
          generatedId
        }
      }
    }
  }
`
