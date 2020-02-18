import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.vehiclesYaml} />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    vehiclesYaml(generatedId: { eq: $generatedId }) {
      name
      category
      manufacturer
      model
      crew
      passengers
      speed
      handling
      silhouette
      weapons
      encumbrance
      hp
      price
      rarity
      index
    }
  }
`
