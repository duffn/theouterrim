import { graphql } from "gatsby"
import React from "react"

import { armorColumns } from "../components/Armor"
import StatPage from "../components/shared/StatPage"

export default function Armor({ data }) {
  return (
    <StatPage title="Armor" columns={armorColumns} data={data.allArmorYaml} />
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
