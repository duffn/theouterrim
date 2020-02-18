import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import Table from "../components/Table"
import SEO from "../components/SEO"
import { weaponsColumns } from "../components/Weapons"

export default function Weapons({ data }) {
  return (
    <Dashboard>
      <SEO title="Weapons" />
      <Table
        title="Weapons"
        columns={weaponsColumns}
        data={data.allWeaponsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query WeaponsPageQuery {
    allWeaponsYaml {
      edges {
        node {
          name
          category
          skill
          damage
          crit
          range
          encumbrance
          hp
          price
          rarity
          special
          index
          generatedId
        }
      }
    }
  }
`
