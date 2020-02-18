import { graphql } from "gatsby"
import React from "react"

import { creaturesWeaponsColumns } from "../components/CreaturesWeapons"
import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"

export default function CreaturesWeapons({ data }) {
  return (
    <Dashboard>
      <SEO title="Creatures Weapons" />
      <Table
        title="Creatures Weapons"
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
