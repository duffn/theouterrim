import { graphql } from "gatsby"
import React from "react"

import { adversariesGearColumns } from "../components/AdversariesGear"
import StatPage from "../components/shared/StatPage"

export default function AdversariesGear({ data }) {
  return (
    <StatPage
      title="Adversaries Gear"
      columns={adversariesGearColumns}
      data={data.allAdversariesGearYaml}
    />
  )
}

export const query = graphql`
  query AdversariesGearPageQuery {
    allAdversariesGearYaml {
      edges {
        node {
          name
          encumbrance
          index
          generatedId
        }
      }
    }
  }
`
