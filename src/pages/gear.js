import React from "react"
import { graphql } from "gatsby"
import StatPage from "../components/shared/StatPage"
import GearColumnProvider from "../components/GearColumnProvider"

export default function Gear({ data }) {
  return (
    <GearColumnProvider>
      <StatPage title="Gear" data={data.allGearYaml} />
    </GearColumnProvider>
  )
}

export const query = graphql`
  query GearPageQuery {
    allGearYaml {
      nodes {
        name
        category
        price
        restricted
        rarity
        encumbrance
        notes
        index
        generatedId
      }
    }
  }
`
