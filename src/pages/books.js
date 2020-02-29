import React from "react"
import { graphql } from "gatsby"
import StatPage from "../components/shared/StatPage"
import BooksColumnProvider from "../components/BooksColumnProvider"

export default function Books({ data }) {
  return (
    <BooksColumnProvider>
      <StatPage title="Books" data={data.allBooksYaml} />
    </BooksColumnProvider>
  )
}

export const query = graphql`
  query BooksPageQuery {
    allBooksYaml {
      edges {
        node {
          name
          system
          initials
          key
          generatedId
        }
      }
    }
  }
`
