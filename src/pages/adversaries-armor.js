import { graphql } from "gatsby"
import React from "react"

import { adversariesArmorColumns } from "../components/AdversariesArmor"
import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import Table from "../components/Table"

export default function AdversariesArmor({ data }) {
  return (
    <Dashboard>
      <SEO title="Adversaries Armor" />
      <Table
        title="Adversaries Armor"
        columns={adversariesArmorColumns}
        data={data.allAdversariesArmorYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query AdversariesArmorPageQuery {
    allAdversariesArmorYaml {
      edges {
        node {
          name
          defense
          soak
          encumbrance
          hp
          index
          generatedId
        }
      }
    }
  }
`
