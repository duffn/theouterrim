import { graphql } from "gatsby"
import React from "react"

import { adversariesArmorColumns } from "../components/AdversariesArmor"
import StatPage from "../components/shared/StatPage"

export default function AdversariesArmor({ data }) {
  return (
    <StatPage
      title="Adversaries Armor"
      columns={adversariesArmorColumns}
      data={data.allAdversariesArmorYaml}
    />
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
