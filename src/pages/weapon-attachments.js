import { graphql } from "gatsby"
import React from "react"

import { weaponAttachmentsColumns } from "../components/WeaponAttachments"
import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"
import Table from "../components/shared/Table"

export default function Attachments({ data }) {
  return (
    <Dashboard>
      <SEO title="Weapon Attachments" />
      <Table
        title="Weapon Attachments"
        columns={weaponAttachmentsColumns}
        data={data.allWeaponAttachmentsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query AttachmentsPageQuery {
    allWeaponAttachmentsYaml {
      edges {
        node {
          name
          category
          price
          encumbrance
          hp
          rarity
          index
          generatedId
        }
      }
    }
  }
`
