import React from "react"
import { graphql } from "gatsby"

import { gearColumns } from "../components/Gear"
import StatPage from "../components/shared/StatPage"

export default function Gear({ data }) {
  return <StatPage title="Gear" columns={gearColumns} data={data.allGearYaml} />
}

export const query = graphql`
  query GearPageQuery {
    allGearYaml {
      edges {
        node {
          name
          category
          price
          rarity
          encumbrance
          index
          generatedId
        }
      }
    }
  }
`
