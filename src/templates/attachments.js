import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  const attachment = data.attachmentsYaml
  const metaDescription = `${attachment.name} is an Attachment in the ${attachment.category} category.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={attachment}
          resourceType="Attachment"
          metaDescription={metaDescription}
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
      notes
      generatedId
      index
    }
  }
`
