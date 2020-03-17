import { graphql } from "gatsby"
import React from "react"
import Grid from "@material-ui/core/Grid"
import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import Table from "../components/shared/Table"
import AdversariesColumnProvider from "../components/AdversariesColumnProvider"
import CreaturesColumnProvider from "../components/CreaturesColumnProvider"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={data.skillsYaml}
          resourceType="Skill"
          location={location}
        />
        <Grid container item xs={12}>
          <AdversariesColumnProvider>
            <Table
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
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!, $skill: String!) {
    skillsYaml(generatedId: { eq: $generatedId }) {
      name
      characteristic
      type
      generatedId
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
