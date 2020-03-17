import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import WeaponsColumnProvider from "../components/WeaponsColumnProvider"

export default function Weapons({ data }) {
  return (
    <WeaponsColumnProvider
      metadata={data.allWeaponsYaml.edges
        .map(({ node }) => node)
        .reduce((acc, cur) => {
          acc[cur.generatedId] = {
            isRestricted: cur.restricted,
            isBrawn: cur.brawn,
          }
          return acc
        }, {})}
    >
      <StatPage title="Weapons" data={data.allWeaponsYaml} />
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
          brawn
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
