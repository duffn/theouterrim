import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import ArmorColumnProvider from "../components/ArmorColumnProvider"

export default function Armor({ data }) {
  return (
    <ArmorColumnProvider>
      <StatPage title="Armor" data={data.allArmorYaml} />
    </ArmorColumnProvider>
  )
}

export const query = graphql`
  query ArmorPageQuery {
    allArmorYaml {
      edges {
        node {
          name
          defense
          soak
          price
          restricted
          encumbrance
          hp
          rarity
          index
          generatedId
        }
      }
    }
  }
`
