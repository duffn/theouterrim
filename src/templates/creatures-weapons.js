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
          item={data.creaturesWeaponsYaml}
          resourceType="Creature Weapon"
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    creaturesWeaponsYaml(generatedId: { eq: $generatedId }) {
      name
      skill
      damage
      brawn
      crit
      range
      special
      generatedId
      index
    }
  }
`
