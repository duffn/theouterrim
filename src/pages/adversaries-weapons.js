import { graphql } from "gatsby"
import React from "react"

import { adversariesWeaponsColumns } from "../components/AdversariesWeapons"
import StatPage from "../components/shared/StatPage"

export default function AdversariesWeapons({ data }) {
  return (
    <StatPage
      title="Adversaries Weapons"
      columns={adversariesWeaponsColumns}
      data={data.allAdversariesWeaponsYaml}
    />
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
