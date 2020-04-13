import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  const va = data.vehicleAttachmentsYaml
  const metaDescription = `${va.name} is a rarity ${va.rarity}, HP ${va.hp} Vehicle Attachment.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={va}
          resourceType="Vehicle Attachment"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    vehicleAttachmentsYaml(generatedId: { eq: $generatedId }) {
      name
      price
      restricted
      hp
      rarity
      generatedId
      index
    }
  }
`
