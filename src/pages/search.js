import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Dashboard from "../components/shared/Dashboard"
import Search from "../components/shared/Search"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default function SearchPage({ location }) {
  const data = useStaticQuery(graphql`
    query SearchQuery {
      siteSearchIndex {
        index
      }
    }
  `)

  return (
    <ThemeProvider>
      <Dashboard>
        <Search searchIndex={data.siteSearchIndex.index} location={location} />
      </Dashboard>
    </ThemeProvider>
  )
}
