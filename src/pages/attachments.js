import { graphql } from "gatsby"
import React from "react"
import StatPage from "../components/shared/StatPage"
import AttachmentsColumnProvider from "../components/AttachmentsColumnProvider"

export default function Attachments({ data }) {
  return (
    <AttachmentsColumnProvider>
      <StatPage title="Attachments" data={data.allAttachmentsYaml} />
    </AttachmentsColumnProvider>
  )
}

export const query = graphql`
  query WeaponsAttachmentsPageQuery {
    allAttachmentsYaml {
      nodes {
        name
        category
        price
        restricted
        encumbrance
        hp
        rarity
        notes
        index
        generatedId
      }
    }
  }
`
