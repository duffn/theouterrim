import { graphql } from "gatsby"
import React from "react"

import { vehicleAttachmentsColumns } from "../components/VehicleAttachments"
import StatPage from "../components/shared/StatPage"

export default function VehicleAttachments({ data }) {
  return (
    <StatPage
      title="Vehicle Attachments"
      columns={vehicleAttachmentsColumns}
      data={data.allVehicleAttachmentsYaml}
    />
  )
}

export const query = graphql`
  query VehicleAttachmentsPageQuery {
    allVehicleAttachmentsYaml {
      edges {
        node {
          name
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
