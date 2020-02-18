import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import { starshipsColumns } from "../components/Starships"
import Table from "../components/Table"

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
          category
          crew
          encumbrance
          generatedId
          navicomputer
          handling
          hp
          index
          model
          price
          manufacturer
          name
          passengers
          rarity
          silhouette
          speed
          weapons
        }
      }
    }
  }
`
