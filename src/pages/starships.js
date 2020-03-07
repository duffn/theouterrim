import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import StarshipsColumnProvider from "../components/StarshipsColumnProvider"

export default function Starships({ data }) {
  return (
    <StarshipsColumnProvider>
      <StatPage title="Starships" data={data.allStarshipsYaml} />
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
          silhouette
          speed
          handling
          armor
          htt
          sst
          defense
          sensors
          crew
          encumbrance
          passengers
          price
          rarity
          hp
          weapons
          hyperdrive
          navicomputer
          notes
          restricted
          index
          generatedId
        }
      }
    }
  }
`
