import React from "react"
import { graphql } from "gatsby"

import AbilitiesColumnProvider from "../components/AbilitiesColumnProvider"
import AdditionalRulesColumnProvider from "../components/AdditionalRulesColumnProvider"
import AdversariesColumnProvider from "../components/AdversariesColumnProvider"
import AdversariesArmorColumnProvider from "../components/AdversariesArmorColumnProvider"
import AdversariesGearColumnProvider from "../components/AdversariesGearColumnProvider"
import ArmorColumnProvider from "../components/ArmorColumnProvider"
import Dashboard from "../components/shared/Dashboard"
import CreaturesWeaponsColumnProvider from "../components/CreaturesWeaponsColumnProvider"
import IndividualCard from "../components/shared/IndividualCard"
import Grid from "@material-ui/core/Grid"
import SkillsColumnProvider from "../components/SkillsColumnProvider"
import SpeciesColumnProvider from "../components/SpeciesColumnProvider"
import StarshipsColumnProvider from "../components/StarshipsColumnProvider"
import Table from "../components/shared/Table"
import TalentsColumnProvider from "../components/TalentsColumnProvider"
import VehiclesColumnProvider from "../components/VehiclesColumnProvider"
import WeaponsColumnProvider from "../components/WeaponsColumnProvider"
import GearColumnProvider from "../components/GearColumnProvider"
import AttachmentsColumnProvider from "../components/AttachmentsColumnProvider"
import VehicleAttachmentsColumnProvider from "../components/VehicleAttachmentsColumnProvider"
import AdversariesWeaponsColumnProvider from "../components/AdversariesWeaponsColumnProvider"
import CreaturesColumnProvider from "../components/CreaturesColumnProvider"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  const book = data.booksYaml
  const metaDescription = `${book.name} is a Book.`

  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={book}
          resourceType="Book"
          metaDescription={metaDescription}
          location={location}
        />

        <Grid container item xs={12}>
          <GearColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table
              title="Gear"
              data={data.allGearYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </GearColumnProvider>
          <WeaponsColumnProvider
            currentBook={data.booksYaml.generatedId}
            metadata={data.allWeaponsYaml.edges
              .map(({ node }) => node)
              .reduce((acc, cur) => {
                acc[cur.generatedId] = {
                  isRestricted: cur.restricted,
                  isBrawn: cur.brawn,
                }
                return acc
              }, {})}
          >
            <Table
              title="Weapons"
              data={data.allWeaponsYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </WeaponsColumnProvider>
          <ArmorColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table
              title="Armor"
              data={data.allArmorYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </ArmorColumnProvider>
          <AttachmentsColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table
              title="Attachments"
              data={data.allAttachmentsYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </AttachmentsColumnProvider>
          <VehiclesColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table
              title="Vehicles"
              data={data.allVehiclesYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </VehiclesColumnProvider>
          <StarshipsColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table
              title="Starships"
              data={data.allStarshipsYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </StarshipsColumnProvider>
          <VehicleAttachmentsColumnProvider
            currentBook={data.booksYaml.generatedId}
          >
            <Table
              title="Vehicle Attachments"
              data={data.allVehicleAttachmentsYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </VehicleAttachmentsColumnProvider>
          <AdditionalRulesColumnProvider
            currentBook={data.booksYaml.generatedId}
          >
            <Table
              title="Additional Rules"
              data={data.allAdditionalRulesYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </AdditionalRulesColumnProvider>
          <SkillsColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table
              title="Skills"
              data={data.allSkillsYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </SkillsColumnProvider>
          <TalentsColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table
              title="Talents"
              data={data.allTalentsYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </TalentsColumnProvider>
          <AbilitiesColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table
              title="Abilities"
              data={data.allAbilitiesYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </AbilitiesColumnProvider>
          <SpeciesColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table
              title="Species"
              data={data.allSpeciesYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </SpeciesColumnProvider>
          <AdversariesColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table
              title="Adversaries"
              data={data.allAdversariesYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </AdversariesColumnProvider>
          <AdversariesGearColumnProvider
            currentBook={data.booksYaml.generatedId}
          >
            <Table
              title="Adversaries Gear"
              data={data.allAdversariesGearYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </AdversariesGearColumnProvider>
          <AdversariesWeaponsColumnProvider
            currentBook={data.booksYaml.generatedId}
            metadata={data.allAdversariesWeaponsYaml.edges
              .map(({ node }) => node)
              .reduce((acc, cur) => {
                acc[cur.generatedId] = {
                  isBrawn: cur.brawn,
                }
                return acc
              }, {})}
          >
            <Table
              title="Adversaries Weapons"
              data={data.allAdversariesWeaponsYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </AdversariesWeaponsColumnProvider>
          <AdversariesArmorColumnProvider
            currentBook={data.booksYaml.generatedId}
          >
            <Table
              title="Adversaries Armor"
              data={data.allAdversariesArmorYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </AdversariesArmorColumnProvider>
          <CreaturesColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table
              title="Creatures"
              data={data.allCreaturesYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </CreaturesColumnProvider>
          <CreaturesWeaponsColumnProvider
            currentBook={data.booksYaml.generatedId}
            metadata={data.allCreaturesWeaponsYaml.edges
              .map(({ node }) => node)
              .reduce((acc, cur) => {
                acc[cur.generatedId] = {
                  isBrawn: cur.brawn,
                }
                return acc
              }, {})}
          >
            <Table
              title="Creatures Weapons"
              data={data.allCreaturesWeaponsYaml.edges.map(({ node }) => {
                return {
                  ...node,
                }
              })}
            />
          </CreaturesWeaponsColumnProvider>
        </Grid>
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($generatedId: String!, $globSearch: String!) {
    booksYaml(generatedId: { eq: $generatedId }) {
      name
      system
      initials
      key
      generatedId
    }
    allWeaponsYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          category
          skill
          damage
          brawn
          crit
          range
          encumbrance
          hp
          price
          restricted
          rarity
          special
          index
          generatedId
        }
      }
    }
    allGearYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          category
          price
          restricted
          rarity
          encumbrance
          notes
          index
          generatedId
        }
      }
    }
    allArmorYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          defense
          soak
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
    allAttachmentsYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
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
    allVehiclesYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          category
          manufacturer
          model
          silhouette
          speed
          handling
          armor
          htt
          sst
          defense
          sensors
          crew
          encumbrance
          passengers
          price
          rarity
          hp
          weapons
          notes
          restricted
          index
          generatedId
        }
      }
    }
    allStarshipsYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          category
          manufacturer
          model
          silhouette
          speed
          handling
          armor
          htt
          sst
          defense
          sensors
          crew
          encumbrance
          passengers
          price
          rarity
          hp
          weapons
          hyperdrive
          navicomputer
          additionalRules
          notes
          restricted
          index
          generatedId
        }
      }
    }
    allAdditionalRulesYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          description
          index
          generatedId
        }
      }
    }
    allVehicleAttachmentsYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          price
          restricted
          hp
          rarity
          index
          generatedId
        }
      }
    }
    allSkillsYaml(filter: { index: { glob: $globSearch } }) {
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
    allTalentsYaml(filter: { index: { glob: $globSearch } }) {
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
    allAbilitiesYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          description
          index
          generatedId
        }
      }
    }
    allSpeciesYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          wt
          st
          brawn
          agility
          intellect
          cunning
          willpower
          presence
          xp
          specialAbilities
          notes
          index
          generatedId
        }
      }
    }
    allAdversariesYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
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
    allAdversariesGearYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          encumbrance
          index
          generatedId
        }
      }
    }
    allAdversariesWeaponsYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          skill
          damage
          brawn
          crit
          range
          special
          index
          generatedId
        }
      }
    }
    allAdversariesArmorYaml(filter: { index: { glob: $globSearch } }) {
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
    allCreaturesYaml(filter: { index: { glob: $globSearch } }) {
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
    allCreaturesWeaponsYaml(filter: { index: { glob: $globSearch } }) {
      edges {
        node {
          name
          skill
          damage
          brawn
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
