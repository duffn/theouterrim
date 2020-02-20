import React from "react"
import { graphql } from "gatsby"

import { booksColumns } from "../components/Books"
import StatPage from "../components/shared/StatPage"

export default function Books({ data }) {
  return (
    <StatPage title="Books" columns={booksColumns} data={data.allBooksYaml} />
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
