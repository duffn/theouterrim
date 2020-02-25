import { graphql } from "gatsby"
import React from "react"

import { weaponsColumns } from "../components/Weapons"
import StatPage from "../components/shared/StatPage"

export default function Weapons({ data }) {
  return (
    <StatPage
      title="Weapons"
      columns={weaponsColumns}
      data={data.allWeaponsYaml}
    />
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
          restricted
          rarity
          special
          index
          generatedId
        }
      }
    }
  }
`
