import { graphql } from "gatsby"
import React from "react"

import { adversariesColumns } from "../components/Adversaries"
import StatPage from "../components/shared/StatPage"

export default function Adversaries({ data }) {
  return (
    <StatPage
      title="Adversaries"
      columns={adversariesColumns}
      data={data.allAdversariesYaml}
    />
  )
}

export const query = graphql`
  query AdversariesPageQuery {
    allAdversariesYaml {
      edges {
        node {
          name
          level
          skills
          talents
          abilities
          equipment
          index
          generatedId
        }
      }
    }
  }
`
