import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

import { indefinite } from "../utils/indefinite"

const CreaturesTemplate = ({ data, location }) => {
  const creature = data.creaturesYaml
  const metaDescription = `${creature.name} is ${indefinite(creature.level)} ${
    creature.level
  } level Creature.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={creature}
          resourceType="Creature"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query ($generatedId: String!) {
    creaturesYaml(generatedId: { eq: $generatedId }) {
      name
      level
      skills
      talents
      abilities
      equipment
      generatedId
      index
    }
  }
`

export default CreaturesTemplate
