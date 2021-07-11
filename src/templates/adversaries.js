import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

const AdversariesTemplate = ({ data, location }) => {
  const adversary = data.adversariesYaml
  const metaDescription = `${adversary.name} is a ${adversary.level} Adversary.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={adversary}
          resourceType="Adversary"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query ($generatedId: String!) {
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

export default AdversariesTemplate
