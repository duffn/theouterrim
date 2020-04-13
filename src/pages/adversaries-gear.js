import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import AdversariesGearColumnProvider from "../components/AdversariesGearColumnProvider"

export default function AdversariesGear({ data }) {
  return (
    <AdversariesGearColumnProvider>
      <StatPage title="Adversaries Gear" data={data.allAdversariesGearYaml} />
    </AdversariesGearColumnProvider>
  )
}

export const query = graphql`
  query AdversariesGearPageQuery {
    allAdversariesGearYaml {
      nodes {
        name
        index
        generatedId
      }
    }
  }
`
