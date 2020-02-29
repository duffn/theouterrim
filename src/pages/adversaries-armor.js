import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"

export default function AdversariesArmor({ data }) {
  return (
    <AdversariesArmorColumnProvider>
      <StatPage
        title="Adversaries Armor"
        data={data.allAdversariesArmorYaml}
      />
    </AdversariesArmorColumnProvider>
  )
}

export const query = graphql`
  query AdversariesArmorPageQuery {
    allAdversariesArmorYaml {
      edges {
        node {
          name
          defense
          soak
          index
          generatedId
        }
      }
    }
  }
`
