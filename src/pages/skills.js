import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import SkillsColumnProvider from "../components/SkillsColumnProvider"

export default function Skills({ data }) {
  return (
    <SkillsColumnProvider>
      <StatPage title="Skills" data={data.allSkillsYaml} />
    </SkillsColumnProvider>
  )
}

export const query = graphql`
  query SkillsPageQuery {
    allSkillsYaml {
      nodes {
        name
        characteristic
        type
        index
        generatedId
      }
    }
  }
`
