import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Dashboard from "../components/shared/Dashboard"
import Search from "../components/shared/Search"
import Title from "../components/shared/Title"

export default function SearchPage({ location }) {
  const data = useStaticQuery(graphql`
    query SearchQuery {
      siteSearchIndex {
        index
      }
    }
  `)

  return (
    <Dashboard>
      <Title>Search The Outer Rim</Title>
      <Search searchIndex={data.siteSearchIndex.index} location={location} />
    </Dashboard>
  )
}
