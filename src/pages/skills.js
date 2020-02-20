import { graphql } from "gatsby"
import React from "react"

import { skillsColumns } from "../components/Skills"
import StatPage from "../components/shared/StatPage"

export default function Skills({ data }) {
  return (
    <StatPage
      title="Skills"
      columns={skillsColumns}
      data={data.allSkillsYaml}
    />
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
