import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import CreaturesWeaponsColumnProvider from "../components/CreaturesWeaponsColumnProvider"

export default function CreaturesWeapons({ data }) {
  return (
    <CreaturesWeaponsColumnProvider
      metadata={data.allCreaturesWeaponsYaml.edges
        .map(({ node }) => node)
        .reduce((acc, cur) => {
          acc[cur.generatedId] = {
            isBrawn: cur.brawn,
          }
          return acc
        }, {})}
    >
      <StatPage title="Creatures Weapons" data={data.allCreaturesWeaponsYaml} />
    </CreaturesWeaponsColumnProvider>
  )
}

export const query = graphql`
  query CreaturesWeaponsPageQuery {
    allCreaturesWeaponsYaml {
      edges {
        node {
          name
          skill
          damage
          brawn
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
