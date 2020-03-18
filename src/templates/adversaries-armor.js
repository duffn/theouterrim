import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  const armor = data.adversariesArmorYaml
  const metaDescription = `${armor.name} is an Adversary Armor with ${armor.defense} defense and ${armor.soak} soak.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={armor}
          resourceType="Adversary Armor"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    adversariesArmorYaml(generatedId: { eq: $generatedId }) {
      name
      defense
      soak
      generatedId
      index
    }
  }
`
