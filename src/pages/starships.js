import { graphql } from "gatsby"
import React from "react"

import { starshipsColumns } from "../components/Starships"
import StatPage from "../components/shared/StatPage"

export default function Starships({ data }) {
  return (
    <StatPage
      title="Starships"
      columns={starshipsColumns}
      data={data.allStarshipsYaml}
    />
  )
}

export const query = graphql`
  query StarshipsPageQuery {
    allStarshipsYaml {
      edges {
        node {
          name
          category
          manufacturer
          model
          crew
          passengers
          silhouette
          speed
          handling
          weapons
          encumbrance
          hp
          price
          restricted
          rarity
          navicomputer
          index
          generatedId
        }
      }
    }
  }
`
