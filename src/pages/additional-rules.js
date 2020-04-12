import { graphql } from "gatsby"
import React from "react"

import AdditionalRulesColumnProvider from "../components/AdditionalRulesColumnProvider"
import StatPage from "../components/shared/StatPage"

export default function AdditionalRules({ data }) {
  return (
    <AdditionalRulesColumnProvider>
      <StatPage
        title="Additional Rules"
        data={data.allAdditionalRulesYaml}
        noGrouping
      />
    </AdditionalRulesColumnProvider>
  )
}

export const query = graphql`
  query AdditionalRulesPageQuery {
    allAdditionalRulesYaml {
      nodes {
        name
        description
        index
        generatedId
      }
    }
  }
`
