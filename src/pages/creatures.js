import { graphql } from "gatsby"
import React from "react"

import { creaturesColumns } from "../components/Creatures"
import StatPage from "../components/shared/StatPage"

export default function Creatures({ data }) {
  return (
    <StatPage
      title="Creatures"
      columns={creaturesColumns}
      data={data.allCreaturesYaml}
    />
  )
}

export const query = graphql`
  query CreaturesPageQuery {
    allCreaturesYaml {
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
