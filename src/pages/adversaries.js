import { graphql } from "gatsby"
import React from "react"
import AdversariesColumnProvider from "../components/AdversariesColumnProvider"
import StatPage from "../components/shared/StatPage"

export default function Adversaries({ data }) {
  return (
    <AdversariesColumnProvider>
      <StatPage title="Adversaries" data={data.allAdversariesYaml} />
    </AdversariesColumnProvider>
  )
}

export const query = graphql`
  query AdversariesPageQuery {
    allAdversariesYaml {
      nodes {
        name
        level
        soak
        wt
        st
        mr
        brawn
        agility
        intellect
        cunning
        willpower
        presence
        skills
        talents
        abilities
        equipment
        notes
        index
        generatedId
      }
    }
  }
`
