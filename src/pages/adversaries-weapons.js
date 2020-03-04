import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import AdversariesWeaponsColumnProvider from "../components/AdversariesWeaponsColumnProvider"

export default function AdversariesWeapons({ data }) {
  return (
    <AdversariesWeaponsColumnProvider
      metadata={data.allAdversariesWeaponsYaml.edges
        .map(({ node }) => node)
        .reduce((acc, cur) => {
          acc[cur.generatedId] = {
            isBrawn: cur.brawn,
          }
          return acc
        }, {})}
    >
      <StatPage
        title="Adversaries Weapons"
        data={data.allAdversariesWeaponsYaml}
      />
    </AdversariesWeaponsColumnProvider>
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
