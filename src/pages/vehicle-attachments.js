import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"
import { vehicleAttachmentsColumns } from "../components/VehicleAttachments"

export default function VehicleAttachments({ data }) {
  return (
    <Dashboard>
      <SEO title="Vehicle Attachments" />
      <Table
        title="Vehicle Attachments"
        columns={vehicleAttachmentsColumns}
        data={data.allVehicleAttachmentsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query VehicleAttachmentsPageQuery {
    allVehicleAttachmentsYaml {
      edges {
        node {
          name
          hp
          index
          price
          rarity
          generatedId
        }
      }
    }
  }
`
