import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import { ThemeProvider } from "../components/shared/ThemeContext"

import { indefinite } from "../utils/indefinite"

const TalentsTemplate = ({ data, location }) => {
  const talent = data.talentsYaml

  const rank = talent.ranked === `Yes` ? `ranked` : `unranked`
  const fs =
    talent.forceSensitive === `Yes` ? `force sensitive` : `non-force sensitive`
  const metaDescription = `${talent.name} is ${indefinite(
    rank
  )} ${rank}, ${fs} Talent.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={talent}
          resourceType="Talent"
          metaDescription={metaDescription}
          location={location}
        />
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query ($generatedId: String!) {
    talentsYaml(generatedId: { eq: $generatedId }) {
      name
      activation
      ranked
      forceSensitive
      generatedId
      index
    }
  }
`

export default TalentsTemplate
