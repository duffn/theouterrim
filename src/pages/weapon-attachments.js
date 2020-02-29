import { graphql } from "gatsby"
import React from "react"

import { weaponAttachmentsColumns } from "../components/WeaponAttachments"
import StatPage from "../components/shared/StatPage"
import WeaponAttachmentsColumnProvider from "../components/WeaponAttachmentsColumnProvider"

export default function WeaponAttachments({ data }) {
  return (
    <WeaponAttachmentsColumnProvider>
      <StatPage
        title="Weapon Attachments"
        data={data.allWeaponAttachmentsYaml}
      />
    </WeaponAttachmentsColumnProvider>
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
