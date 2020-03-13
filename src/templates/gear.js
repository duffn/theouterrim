import React from "react"
import { graphql } from "gatsby"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={data.gearYaml}
          resourceType="Gear"
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    gearYaml(generatedId: { eq: $generatedId }) {
      name
      category
      price
      restricted
      encumbrance
      rarity
      notes
      generatedId
      index
    }
  }
`
