import { graphql } from "gatsby"
import React from "react"

import { qualitiesColumns } from "../components/Qualities"
import StatPage from "../components/shared/StatPage"

export default function Qualities({ data }) {
  return (
    <StatPage
      title="Qualities"
      columns={qualitiesColumns}
      data={data.allQualitiesYaml}
    />
  )
}

export const query = graphql`
  query QualitiesPageQuery {
    allQualitiesYaml {
      edges {
        node {
          name
          active
          ranked
          effect
          index
          generatedId
        }
      }
    }
  }
`
