import { graphql } from "gatsby"
import React from "react"
import Grid from "@material-ui/core/Grid"
import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import Table from "../components/shared/Table"
import AdversariesColumnProvider from "../components/AdversariesColumnProvider"
import CreaturesColumnProvider from "../components/CreaturesColumnProvider"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.skillsYaml} />
      <Grid container item xs={12}>
        <AdversariesColumnProvider>
          <Table
            marginTop
            title="Adversaries"
            data={data.allAdversariesYaml.edges.map(({ node }) => {
              return {
                ...node,
              }
            })}
          />
        </AdversariesColumnProvider>
        <CreaturesColumnProvider>
          <Table
            marginTop
            title="Creatures"
            data={data.allCreaturesYaml.edges.map(({ node }) => {
              return {
                ...node,
              }
            })}
          />
        </CreaturesColumnProvider>
      </Grid>
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!, $skill: String!) {
    skillsYaml(generatedId: { eq: $generatedId }) {
      name
      characteristic
      type
      index
    }
    allAdversariesYaml(filter: { skills: { glob: $skill } }) {
      edges {
        node {
          name
          level
          skills
          talents
          abilities
          equipment
          index
          generatedId
        }
      }
    }
    allCreaturesYaml(filter: { skills: { glob: $skill } }) {
      edges {
        node {
          name
          level
          skills
          talents
          abilities
          equipment
          index
          generatedId
        }
      }
    }
  }
`
