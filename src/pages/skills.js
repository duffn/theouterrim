import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import { skillsColumns } from "../components/Skills"
import SEO from "../components/SEO"
import Table from "../components/Table"

export default function Skills({ data }) {
  return (
    <Dashboard>
      <SEO title="Skills" />
      <Table
        title="Skills"
        columns={skillsColumns}
        data={data.allSkillsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query SkillsPageQuery {
    allSkillsYaml {
      edges {
        node {
          name
          characteristic
          type
          index
          generatedId
        }
      }
    }
  }
`
