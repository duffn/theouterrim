import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={data.attachmentsYaml}
          resourceType="Attachment"
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    attachmentsYaml(generatedId: { eq: $generatedId }) {
      name
      category
      price
      restricted
      encumbrance
      hp
      rarity
      generatedId
      index
    }
  }
`
