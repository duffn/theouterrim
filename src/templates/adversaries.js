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
          item={data.adversariesYaml}
          resourceType="Adversary"
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    adversariesYaml(generatedId: { eq: $generatedId }) {
      name
      level
      soak
      wt
      st
      mr
      brawn
      agility
      intellect
      cunning
      willpower
      presence
      skills
      talents
      abilities
      equipment
      notes
      index
      generatedId
    }
  }
`
