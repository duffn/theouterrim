import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import Table from "../components/Table"
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
          category
          crew
          encumbrance
          generatedId
          handling
          hp
          index
          manufacturer
          model
          name
          price
          passengers
          rarity
          silhouette
          speed
          weapons
        }
      }
    }
  }
`
