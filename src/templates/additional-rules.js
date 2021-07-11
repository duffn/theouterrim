import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

const AdditionalRulesTemplate = ({ data, location }) => {
  const rule = data.additionalRulesYaml
  const metaDescription = `${rule.name} is an Additional Rule for Vehicles.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={data.additionalRulesYaml}
          resourceType="Additional Rule"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query ($generatedId: String!) {
    additionalRulesYaml(generatedId: { eq: $generatedId }) {
      name
      description
      generatedId
      index
    }
  }
`

export default AdditionalRulesTemplate
