import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  const species = data.speciesYaml
  const metaDescription = `${species.name} is a Species.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={species}
          resourceType="Species"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    speciesYaml(generatedId: { eq: $generatedId }) {
      name
      wt
      st
      brawn
      agility
      intellect
      cunning
      willpower
      presence
      xp
      specialAbilities
      notes
      index
      generatedId
    }
  }
`
