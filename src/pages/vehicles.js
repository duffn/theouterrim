import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import VehiclesColumnProvider from "../components/VehiclesColumnProvider"

export default function Vehicles({ data }) {
  return (
    <VehiclesColumnProvider>
      <StatPage
        title="Vehicles"
        data={data.allVehiclesYaml}
      />
    </VehiclesColumnProvider>
  )
}

export const query = graphql`
  query VehiclePageQuery {
    allVehiclesYaml {
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
          index
          generatedId
        }
      }
    }
  }
`
