import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import AdversariesWeaponsColumnProvider from "../components/AdversariesWeaponsColumnProvider"

export default function AdversariesWeapons({ data }) {
  return (
    <AdversariesWeaponsColumnProvider>
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
