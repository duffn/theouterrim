import { graphql } from "gatsby"
import React from "react"

import { weaponsColumns } from "../components/Weapons"
import StatPage from "../components/shared/StatPage"
import WeaponsColumnProvider from "../components/WeaponsColumnProvider"

export default function Weapons({ data }) {
  return (
    <WeaponsColumnProvider>
      <StatPage
        title="Weapons"
        data={data.allWeaponsYaml}
      />
    </WeaponsColumnProvider>
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
