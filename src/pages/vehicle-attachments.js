import { graphql } from "gatsby"
import React from "react"

import { vehicleAttachmentsColumns } from "../components/VehicleAttachments"
import StatPage from "../components/shared/StatPage"
import VehicleAttachmentsColumnProvider from "../components/VehicleAttachmentsColumnProvider"

export default function VehicleAttachments({ data }) {
  return (
    <VehicleAttachmentsColumnProvider>
      <StatPage
        title="Vehicle Attachments"
        data={data.allVehicleAttachmentsYaml}
      />
    </VehicleAttachmentsColumnProvider>
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
