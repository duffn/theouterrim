import { graphql } from "gatsby"
import React from "react"

import { starshipsColumns } from "../components/Starships"
import StatPage from "../components/shared/StatPage"
import StarshipsColumnProvider from "../components/StarshipsColumnProvider"

export default function Starships({ data }) {
  return (
    <StarshipsColumnProvider>
      <StatPage
        title="Starships"
        data={data.allStarshipsYaml}
      />
    </StarshipsColumnProvider>
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
