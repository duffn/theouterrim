import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import { qualitiesColumns } from "../components/Qualities"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"

export default function Qualities({ data }) {
  return (
    <Dashboard>
      <SEO title="Qualities" />
      <Table
        title="Qualities"
        columns={qualitiesColumns}
        data={data.allQualitiesYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
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
