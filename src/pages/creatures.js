import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import CreaturesColumnProvider from "../components/CreaturesColumnProvider"

export default function Creatures({ data }) {
  return (
    <CreaturesColumnProvider>
      <StatPage
        title="Creatures"
        data={data.allCreaturesYaml}
      />
    </CreaturesColumnProvider>
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
