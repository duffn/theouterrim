import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import QualitiesColumnProvider from "../components/QualitiesColumnProvider"

export default function Qualities({ data }) {
  return (
    <QualitiesColumnProvider>
      <StatPage title="Qualities" data={data.allQualitiesYaml} />
    </QualitiesColumnProvider>
  )
}

export const query = graphql`
  query QualitiesPageQuery {
    allQualitiesYaml {
      nodes {
        name
        active
        ranked
        effect
        index
        generatedId
      }
    }
  }
`
