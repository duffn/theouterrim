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
import VehicleWeaponsColumnProvider from "../components/VehicleWeaponsColumnProvider"
import AdversariesWeaponsColumnProvider from "../components/AdversariesWeaponsColumnProvider"
import CreaturesColumnProvider from "../components/CreaturesColumnProvider"
import { ThemeProvider } from "../components/shared/ThemeContext"

export default ({ data, location }) => {
  return (
    <ThemeProvider>
      <Dashboard>
        <IndividualCard
          item={data.booksYaml}
          resourceType="Book"
          location={location}
        />

        <Grid container item xs={12}>
          <GearColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table title="Gear" data={data.allGearYaml.nodes} />
          </GearColumnProvider>
          <WeaponsColumnProvider
            currentBook={data.booksYaml.generatedId}
            metadata={data.allWeaponsYaml.nodes.reduce((acc, cur) => {
              acc[cur.generatedId] = {
                isRestricted: cur.restricted,
                isBrawn: cur.brawn,
              }
              return acc
            }, {})}
          >
            <Table title="Weapons" data={data.allWeaponsYaml.nodes} />
          </WeaponsColumnProvider>
          <ArmorColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table title="Armor" data={data.allArmorYaml.nodes} />
          </ArmorColumnProvider>
          <AttachmentsColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table title="Attachments" data={data.allAttachmentsYaml.nodes} />
          </AttachmentsColumnProvider>
          <VehiclesColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table title="Vehicles" data={data.allVehiclesYaml.nodes} />
          </VehiclesColumnProvider>
          <StarshipsColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table title="Starships" data={data.allStarshipsYaml.nodes} />
          </StarshipsColumnProvider>
          <VehicleWeaponsColumnProvider
            currentBook={data.booksYaml.generatedId}
            metadata={data.allVehicleWeaponsYaml.nodes.reduce((acc, cur) => {
              acc[cur.generatedId] = {
                isRestricted: cur.restricted,
              }
              return acc
            }, {})}
          >
            <Table
              title="Vehicle Weapons"
              data={data.allVehicleWeaponsYaml.nodes}
            />
          </VehicleWeaponsColumnProvider>
          <VehicleAttachmentsColumnProvider
            currentBook={data.booksYaml.generatedId}
          >
            <Table
              title="Vehicle Attachments"
              data={data.allVehicleAttachmentsYaml.nodes}
            />
          </VehicleAttachmentsColumnProvider>
          <AdditionalRulesColumnProvider
            currentBook={data.booksYaml.generatedId}
          >
            <Table
              title="Additional Rules"
              data={data.allAdditionalRulesYaml.nodes}
            />
          </AdditionalRulesColumnProvider>
          <SkillsColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table title="Skills" data={data.allSkillsYaml.nodes} />
          </SkillsColumnProvider>
          <TalentsColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table title="Talents" data={data.allTalentsYaml.nodes} />
          </TalentsColumnProvider>
          <AbilitiesColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table title="Abilities" data={data.allAbilitiesYaml.nodes} />
          </AbilitiesColumnProvider>
          <SpeciesColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table title="Species" data={data.allSpeciesYaml.nodes} />
          </SpeciesColumnProvider>
          <AdversariesColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table title="Adversaries" data={data.allAdversariesYaml.nodes} />
          </AdversariesColumnProvider>
          <AdversariesGearColumnProvider
            currentBook={data.booksYaml.generatedId}
          >
            <Table
              title="Adversaries Gear"
              data={data.allAdversariesGearYaml.nodes}
            />
          </AdversariesGearColumnProvider>
          <AdversariesWeaponsColumnProvider
            currentBook={data.booksYaml.generatedId}
            metadata={data.allAdversariesWeaponsYaml.nodes.reduce(
              (acc, cur) => {
                acc[cur.generatedId] = {
                  isBrawn: cur.brawn,
                }
                return acc
              },
              {}
            )}
          >
            <Table
              title="Adversaries Weapons"
              data={data.allAdversariesWeaponsYaml.nodes}
            />
          </AdversariesWeaponsColumnProvider>
          <AdversariesArmorColumnProvider
            currentBook={data.booksYaml.generatedId}
          >
            <Table
              title="Adversaries Armor"
              data={data.allAdversariesArmorYaml.nodes}
            />
          </AdversariesArmorColumnProvider>
          <CreaturesColumnProvider currentBook={data.booksYaml.generatedId}>
            <Table title="Creatures" data={data.allCreaturesYaml.nodes} />
          </CreaturesColumnProvider>
          <CreaturesWeaponsColumnProvider
            currentBook={data.booksYaml.generatedId}
            metadata={data.allCreaturesWeaponsYaml.nodes.reduce((acc, cur) => {
              acc[cur.generatedId] = {
                isBrawn: cur.brawn,
              }
              return acc
            }, {})}
          >
            <Table
              title="Creatures Weapons"
              data={data.allCreaturesWeaponsYaml.nodes}
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
      nodes {
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
        notes
        index
        generatedId
      }
    }
    allGearYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
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
    allArmorYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
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
    allAttachmentsYaml(filter: { index: { glob: $globSearch } }) {
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

    allVehiclesYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
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
    allStarshipsYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
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
    allAdditionalRulesYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
        name
        description
        index
        generatedId
      }
    }
    allVehicleAttachmentsYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
        name
        price
        restricted
        hp
        rarity
        index
        generatedId
      }
    }
    allVehicleWeaponsYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
        name
        category
        range
        damage
        crit
        price
        restricted
        rarity
        qualities
        compatibleSilhouette
        notes
        index
        generatedId
      }
    }
    allSkillsYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
        name
        characteristic
        type
        index
        generatedId
      }
    }
    allTalentsYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
        name
        activation
        ranked
        forceSensitive
        index
        generatedId
      }
    }
    allAbilitiesYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
        name
        description
        index
        generatedId
      }
    }
    allSpeciesYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
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
    allAdversariesYaml(filter: { index: { glob: $globSearch } }) {
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
    allAdversariesGearYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
        name
        encumbrance
        index
        generatedId
      }
    }
    allAdversariesWeaponsYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
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
    allAdversariesArmorYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
        name
        defense
        soak
        encumbrance
        hp
        index
        generatedId
      }
    }
    allCreaturesYaml(filter: { index: { glob: $globSearch } }) {
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
    allCreaturesWeaponsYaml(filter: { index: { glob: $globSearch } }) {
      nodes {
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
`
