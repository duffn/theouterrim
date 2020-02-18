import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import { starshipsColumns } from "../components/Starships"
import Table from "../components/shared/Table"

export default function Starships({ data }) {
  return (
    <Dashboard>
      <SEO title="Starships" />
      <Table
        title="Starships"
        columns={starshipsColumns}
        data={data.allStarshipsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query StarshipsPageQuery {
    allStarshipsYaml {
      edges {
        node {
          name
          category
          manufacturer
          model
          crew
          passengers
          silhouette
          speed
          handling
          weapons
          encumbrance
          hp
          price
          rarity
          navicomputer
          index
          generatedId
        }
      }
    }
  }
`
