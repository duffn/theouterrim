import React from "react"
import { graphql } from "gatsby"

import { abilitiesColumns } from "../components/Abilities"
import { adversariesColumns } from "../components/Adversaries"
import { adversariesArmorColumns } from "../components/AdversariesArmor"
import { adversariesGearColumns } from "../components/AdversariesGear"
import { adversariesWeaponsColumns } from "../components/AdversariesWeapons"
import { weaponAttachmentsColumns } from "../components/WeaponAttachments"
import { armorColumns } from "../components/Armor"
import Dashboard from "../components/shared/Dashboard"
import { creaturesColumns } from "../components/Creatures"
import { creaturesWeaponsColumns } from "../components/CreaturesWeapons"
import IndividualCard from "../components/shared/IndividualCard"
import { gearColumns } from "../components/Gear"
import Grid from "@material-ui/core/Grid"
import { skillsColumns } from "../components/Skills"
import { speciesColumns } from "../components/Species"
import { starshipsColumns } from "../components/Starships"
import Table from "../components/shared/Table"
import { talentsColumns } from "../components/Talents"
import { vehiclesColumns } from "../components/Vehicles"
import { vehicleAttachmentsColumns } from "../components/VehicleAttachments"
import { weaponsColumns } from "../components/Weapons"

export default ({ data, location }) => {
  return (
    <Dashboard>
      <IndividualCard
        item={data.booksYaml}
        resourceType="Book"
        location={location}
      />

      <Grid container item xs={12}>
        <Table
          title="Gear"
          columns={gearColumns}
          data={data.allGearYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
          marginTop
        />
        <Table
          title="Weapons"
          columns={weaponsColumns}
          data={data.allWeaponsYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Armor"
          columns={armorColumns}
          data={data.allArmorYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Weapon Attachments"
          columns={weaponAttachmentsColumns}
          data={data.allWeaponAttachmentsYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Vehicles"
          columns={vehiclesColumns}
          data={data.allVehiclesYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Starships"
          columns={starshipsColumns}
          data={data.allStarshipsYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Vehicle Attachments"
          columns={vehicleAttachmentsColumns}
          data={data.allVehicleAttachmentsYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Skills"
          columns={skillsColumns}
          data={data.allSkillsYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Talents"
          columns={talentsColumns}
          data={data.allTalentsYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Abilities"
          columns={abilitiesColumns}
          data={data.allAbilitiesYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Species"
          columns={speciesColumns}
          data={data.allSpeciesYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Adversaries"
          columns={adversariesColumns}
          data={data.allAdversariesYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Adversaries Gear"
          columns={adversariesGearColumns}
          data={data.allAdversariesGearYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Adversaries Weapons"
          columns={adversariesWeaponsColumns}
          data={data.allAdversariesWeaponsYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Adversaries Armor"
          columns={adversariesArmorColumns}
          data={data.allAdversariesArmorYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Creatures"
          columns={creaturesColumns}
          data={data.allCreaturesYaml.edges.map(({ node }) => {
            return {
              ...node,
            }
          })}
        />
        <Table
          title="Creatures Weapons"
          columns={creaturesWeaponsColumns}
          data={data.allCreaturesWeaponsYaml.edges.map(({ node }) => {
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
  query($generatedId: String!, $name: String!) {
    booksYaml(generatedId: { eq: $generatedId }) {
      name
      system
      initials
      key
    }
    allWeaponsYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          category
          skill
          damage
          crit
          range
          encumbrance
          hp
          price
          rarity
          special
          index
          generatedId
        }
      }
    }
    allGearYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          category
          price
          rarity
          encumbrance
          index
          generatedId
        }
      }
    }
    allArmorYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          defense
          soak
          price
          encumbrance
          hp
          rarity
          index
          generatedId
        }
      }
    }
    allWeaponAttachmentsYaml(filter: { index: { glob: $name } }) {
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
    allVehiclesYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          category
          crew
          encumbrance
          generatedId
          handling
          price
          hp
          index
          manufacturer
          name
          passengers
          rarity
          silhouette
          speed
          weapons
          generatedId
        }
      }
    }
    allStarshipsYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          category
          crew
          price
          model
          encumbrance
          navicomputer
          generatedId
          handling
          hp
          index
          manufacturer
          name
          passengers
          rarity
          silhouette
          speed
          weapons
          generatedId
        }
      }
    }
    allVehicleAttachmentsYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          price
          hp
          rarity
          index
          generatedId
        }
      }
    }
    allSkillsYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          characteristic
          type
          index
          generatedId
        }
      }
    }
    allTalentsYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          activation
          ranked
          forceSensitive
          index
          generatedId
        }
      }
    }
    allAbilitiesYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          description
          index
          generatedId
        }
      }
    }
    allSpeciesYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          player
          index
          generatedId
        }
      }
    }
    allAdversariesYaml(filter: { index: { glob: $name } }) {
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
    allAdversariesGearYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          encumbrance
          index
          generatedId
        }
      }
    }
    allAdversariesWeaponsYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          skill
          damage
          crit
          range
          special
          index
          generatedId
        }
      }
    }
    allAdversariesArmorYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          defense
          soak
          encumbrance
          hp
          index
          generatedId
        }
      }
    }
    allCreaturesYaml(filter: { index: { glob: $name } }) {
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
    allCreaturesWeaponsYaml(filter: { index: { glob: $name } }) {
      edges {
        node {
          name
          skill
          damage
          crit
          range
          special
          index
          generatedId
        }
      }
    }
  }
`
