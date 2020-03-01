import { graphql } from "gatsby"
import React from "react"
import AdversariesColumnProvider from "../components/AdversariesColumnProvider"
import StatPage from "../components/shared/StatPage"

export default function Adversaries({ data }) {
  return (
    <AdversariesColumnProvider>
      <StatPage title="Adversaries" data={data.allAdversariesYaml} />
    </AdversariesColumnProvider>
  )
}

export const query = graphql`
  query AdversariesPageQuery {
    allAdversariesYaml {
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
