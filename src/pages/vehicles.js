import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"
import { vehiclesColumns } from "../components/Vehicles"

export default function Vehicles({ data }) {
  return (
    <Dashboard>
      <SEO title="Vehicles" />
      <Table
        title="Vehicles"
        columns={vehiclesColumns}
        data={data.allVehiclesYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
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
