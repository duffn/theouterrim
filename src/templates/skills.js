import { graphql } from "gatsby"
import React from "react"
import Grid from "@material-ui/core/Grid"
import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"
import Table from "../components/shared/Table"
import AdversariesColumnProvider from "../components/AdversariesColumnProvider"
import CreaturesColumnProvider from "../components/CreaturesColumnProvider"
import { ThemeProvider } from "../components/shared/ThemeContext"

import { indefinite } from "../utils/indefinite"

const SkillsTemplate = ({ data, location }) => {
  const skill = data.skillsYaml
  const metaDescription = `${skill.name} is ${indefinite(skill.type)} ${
    skill.type
  } ${skill.characteristic} Skill.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={skill}
          resourceType="Skill"
          metaDescription={metaDescription}
          location={location}
        />
        <Grid container item xs={12}>
          <AdversariesColumnProvider>
            <Table title="Adversaries" data={data.allAdversariesYaml.nodes} />
          </AdversariesColumnProvider>
          <CreaturesColumnProvider>
            <Table title="Creatures" data={data.allCreaturesYaml.nodes} />
          </CreaturesColumnProvider>
        </Grid>
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query ($generatedId: String!, $skill: String!) {
    skillsYaml(generatedId: { eq: $generatedId }) {
      name
      characteristic
      type
      generatedId
      index
    }
    allAdversariesYaml(filter: { skills: { glob: $skill } }) {
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
    allCreaturesYaml(filter: { skills: { glob: $skill } }) {
      nodes {
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
`

export default SkillsTemplate
