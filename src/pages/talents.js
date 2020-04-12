import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import TalentsColumnProvider from "../components/TalentsColumnProvider"

export default function Talents({ data }) {
  return (
    <TalentsColumnProvider>
      <StatPage title="Talents" data={data.allTalentsYaml} />
    </TalentsColumnProvider>
  )
}

export const query = graphql`
  query TalentsPageQuery {
    allTalentsYaml {
      nodes {
        name
        activation
        ranked
        forceSensitive
        index
        generatedId
      }
    }
  }
`
