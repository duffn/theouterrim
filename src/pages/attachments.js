import { graphql } from "gatsby"
import React from "react"

import { attachmentsColumns } from "../components/Attachments"
import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import Table from "../components/Table"

export default function Attachments({ data }) {
  return (
    <Dashboard>
      <SEO title="Attachments" />
      <Table
        title="Attachments"
        columns={attachmentsColumns}
        data={data.allAttachmentsYaml.edges.map(({ node }) => {
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
    allAttachmentsYaml {
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
