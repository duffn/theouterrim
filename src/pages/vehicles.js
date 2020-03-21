import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import VehiclesColumnProvider from "../components/VehiclesColumnProvider"

export default function Vehicles({ data }) {
  return (
    <VehiclesColumnProvider>
      <StatPage title="Vehicles" data={data.allVehiclesYaml} />
    </VehiclesColumnProvider>
  )
}

export const query = graphql`
  query VehiclePageQuery {
    allVehiclesYaml {
      nodes {
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
        notes
        restricted
        index
        generatedId
      }
    }
  }
`
