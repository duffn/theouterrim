import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  const ability = data.abilitiesYaml
  const metaDescription = `${ability.name} is an Ability.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={ability}
          resourceType="Ability"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    abilitiesYaml(generatedId: { eq: $generatedId }) {
      name
      description
      generatedId
      index
    }
  }
`
