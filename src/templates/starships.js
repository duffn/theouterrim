import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.starshipsYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    starshipsYaml(generatedId: { eq: $generatedId }) {
      name
      category
      manufacturer
      model
      crew
      passengers
      encumbrance
      handling
      silhouette
      speed
      weapons
      hp
      price
      rarity
      navicomputer
      index
    }
  }
`
