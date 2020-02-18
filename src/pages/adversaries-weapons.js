import { graphql } from "gatsby"
import React from "react"

import { adversariesWeaponsColumns } from "../components/AdversariesWeapons"
import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import Table from "../components/Table"

export default function AdversariesWeapons({ data }) {
  return (
    <Dashboard>
      <SEO title="Adversaries Weapons" />
      <Table
        title="AdversariesWeapons"
        columns={adversariesWeaponsColumns}
        data={data.allAdversariesWeaponsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query AdversariesWeaponsPageQuery {
    allAdversariesWeaponsYaml {
      edges {
        node {
          name
          skill
          damage
          crit
          range
          special
          index
          generatedId
        }
      }
    }
  }
`
