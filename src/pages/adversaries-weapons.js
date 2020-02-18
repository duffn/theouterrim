import { graphql } from "gatsby"
import React from "react"

import { adversariesWeaponsColumns } from "../components/AdversariesWeapons"
import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"

export default function AdversariesWeapons({ data }) {
  return (
    <Dashboard>
      <SEO title="Adversaries Weapons" />
      <Table
        title="Adversaries Weapons"
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
