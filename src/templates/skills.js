import { graphql } from "gatsby"
import React from "react"
import Grid from "@material-ui/core/Grid"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import Table from "../components/shared/Table"
import { adversariesColumns } from "../components/Adversaries"
import { creaturesColumns } from "../components/Creatures"

export default ({ data, location }) => {
  return (
    <Dashboard>
      <IndividualCard
        item={data.skillsYaml}
        resourceType="Skill"
        location={location}
      />
      <Grid container item xs={12}>
        <Table
          marginTop
          title="Adversaries"
          columns={adversariesColumns}
          data={data.allAdversariesYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          marginTop
          title="Creatures"
          columns={creaturesColumns}
          data={data.allCreaturesYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
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
