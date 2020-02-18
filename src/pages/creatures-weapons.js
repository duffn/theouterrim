import { graphql } from "gatsby"
import React from "react"

import { creaturesWeaponsColumns } from "../components/CreaturesWeapons"
import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import Table from "../components/Table"

export default function CreaturesWeapons({ data }) {
  return (
    <Dashboard>
      <SEO title="Creatures Weapons" />
      <Table
        title="CreaturesWeapons"
        columns={creaturesWeaponsColumns}
        data={data.allCreaturesWeaponsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query CreaturesWeaponsPageQuery {
    allCreaturesWeaponsYaml {
      edges {
        node {
          name
          skill
          damage
          crit
          range
          special
          index
          generatedId
        }
      }
    }
  }
`
