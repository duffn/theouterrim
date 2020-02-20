import { graphql } from "gatsby"
import React from "react"

import { creaturesWeaponsColumns } from "../components/CreaturesWeapons"
import StatPage from "../components/shared/StatPage"

export default function CreaturesWeapons({ data }) {
  return (
    <StatPage
      title="Creatures Weapons"
      columns={creaturesWeaponsColumns}
      data={data.allCreaturesWeaponsYaml}
    />
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
