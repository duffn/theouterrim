import { graphql } from "gatsby"
import React from "react"

import { vehiclesColumns } from "../components/Vehicles"
import StatPage from "../components/shared/StatPage"

export default function Vehicles({ data }) {
  return (
    <StatPage
      title="Vehicles"
      columns={vehiclesColumns}
      data={data.allVehiclesYaml}
    />
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
          rarity
          index
          generatedId
        }
      }
    }
  }
`
