import { graphql } from "gatsby"
import React from "react"

import { weaponAttachmentsColumns } from "../components/WeaponAttachments"
import StatPage from "../components/shared/StatPage"

export default function WeaponAttachments({ data }) {
  return (
    <StatPage
      title="Weapon Attachments"
      columns={weaponAttachmentsColumns}
      data={data.allWeaponAttachmentsYaml}
    />
  )
}

export const query = graphql`
  query WeaponsAttachmentsPageQuery {
    allWeaponAttachmentsYaml {
      edges {
        node {
          name
          category
          price
          restricted
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
