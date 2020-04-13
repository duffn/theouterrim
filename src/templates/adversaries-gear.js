import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  const gear = data.adversariesGearYaml
  const metaDescription = `${gear.name} is an Adversary Gear.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={gear}
          resourceType="Adversary Gear"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    adversariesGearYaml(generatedId: { eq: $generatedId }) {
      name
      generatedId
      index
    }
  }
`
