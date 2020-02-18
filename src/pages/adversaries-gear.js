import { graphql } from "gatsby"
import React from "react"

import { adversariesGearColumns } from "../components/AdversariesGear"
import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import Table from "../components/Table"

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
