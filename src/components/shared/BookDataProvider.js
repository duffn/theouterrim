import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function ProvideBookData() {
  let data = useStaticQuery(graphql`
    query BookNamesQuery {
      allBooksYaml {
        nodes {
          name
          generatedId
        }
      }
    }
  `)

  return data
}
