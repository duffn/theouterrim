import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import { adversariesColumns } from "../components/Adversaries"
import SEO from "../components/SEO"
import Table from "../components/Table"

export default function Adversaries({ data }) {
  return (
    <Dashboard>
      <SEO title="Adversaries" />
      <Table
        title="Adversaries"
        columns={adversariesColumns}
        data={data.allAdversariesYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query AdversariesPageQuery {
    allAdversariesYaml {
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
