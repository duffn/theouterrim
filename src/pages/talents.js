import { graphql } from "gatsby"
import React from "react"

import { talentsColumns } from "../components/Talents"
import StatPage from "../components/shared/StatPage"

export default function Talents({ data }) {
  return (
    <StatPage
      title="Talents"
      columns={talentsColumns}
      data={data.allTalentsYaml}
    />
  )
}

export const query = graphql`
  query TalentsPageQuery {
    allTalentsYaml {
      edges {
        node {
          name
          activation
          ranked
          forceSensitive
          index
          generatedId
        }
      }
    }
  }
`
