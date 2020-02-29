import { graphql } from "gatsby"
import React from "react"

import { adversariesGearColumns } from "../components/AdversariesGear"
import StatPage from "../components/shared/StatPage"
import AdversariesGearColumnProvider from "../components/AdversariesGearColumnProvider"

export default function AdversariesGear({ data }) {
  return (
    <AdversariesGearColumnProvider>
      <StatPage
        title="Adversaries Gear"
        data={data.allAdversariesGearYaml}
      />
    </AdversariesGearColumnProvider>
  )
}

export const query = graphql`
  query AdversariesGearPageQuery {
    allAdversariesGearYaml {
      edges {
        node {
          name
          index
          generatedId
        }
      }
    }
  }
`
