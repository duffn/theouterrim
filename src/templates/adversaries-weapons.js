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
          item={data.adversariesWeaponsYaml}
          resourceType="Adversary Weapon"
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    adversariesWeaponsYaml(generatedId: { eq: $generatedId }) {
      name
      skill
      damage
      crit
      range
      special
      generatedId
      index
    }
  }
`
