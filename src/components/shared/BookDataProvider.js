import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function ProvideBookData() {
  let data = useStaticQuery(graphql`
    query BookNamesQuery {
      allBooksYaml {
        edges {
          node {
            name
            generatedId
          }
        }
      }
    }
  `)

  return data
}
