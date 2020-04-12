import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import VehicleWeaponsColumnProvider from "../components/VehicleWeaponsColumnProvider"

export default function Weapons({ data }) {
  return (
    <VehicleWeaponsColumnProvider
      metadata={data.allVehicleWeaponsYaml.nodes.reduce((acc, cur) => {
        acc[cur.generatedId] = {
          isRestricted: cur.restricted,
        }
        return acc
      }, {})}
    >
      <StatPage title="Vehicle Weapons" data={data.allVehicleWeaponsYaml} />
    </VehicleWeaponsColumnProvider>
  )
}

export const query = graphql`
  query VehicleWeaponsPageQuery {
    allVehicleWeaponsYaml {
      nodes {
        name
        category
        range
        damage
        crit
        price
        restricted
        rarity
        qualities
        compatibleSilhouette
        notes
        index
        generatedId
      }
    }
  }
`
