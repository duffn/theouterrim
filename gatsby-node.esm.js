import { slugify } from "./src/utils/slugify"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function formatYamlName(name) {
  const parts = name.split(`-`)
  const first = capitalizeFirstLetter(parts[0])

  return parts[1] ? [first, capitalizeFirstLetter(parts[1])].join(``) : first
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type AbilitiesYaml implements Node @dontInfer {
      name: String!
      description: String
      index: String
      generatedId: String!
    }

    type AdversariesArmorYaml implements Node @dontInfer {
      name: String!
      defense: Int
      soak: Int
      encumbrance: Int
      hp: Int
      index: String
      generatedId: String!
    }

    type AdversariesGearYaml implements Node @dontInfer {
      name: String!
      encumbrance: Int
      index: String
      generatedId: String!
    }

    type AdversariesWeaponsYaml implements Node @dontInfer {
      name: String!
      skill: String
      damage: Int
      brawn: Boolean
      crit: String
      range: String
      special: String
      index: String
      generatedId: String!
    }

    type AdversariesYaml implements Node @dontInfer {
      name: String!
      level: String
      soak: Int
      wt: Int
      st: String
      mr: String
      brawn: Int
      agility: Int
      intellect: Int
      cunning: Int
      willpower: Int
      presence: Int
      skills: String
      talents: String
      abilities: String
      equipment: String
      notes: String
      index: String
      generatedId: String!
    }

    type ArmorYaml implements Node @dontInfer {
      name: String!
      defense: Int
      soak: Int
      price: Int
      restricted: Boolean
      encumbrance: Int
      hp: Int
      rarity: Int
      notes: String
      index: String
      generatedId: String!
    }

    type BooksYaml implements Node @dontInfer {
      name: String!
      system: String
      initials: String
      key: String
      index: String
      generatedId: String!
    }

    type CreaturesWeaponsYaml implements Node @dontInfer {
      name: String!
      skill: String
      damage: String
      brawn: Boolean
      crit: String
      range: String
      special: String
      index: String
      generatedId: String!
    }

    type CreaturesYaml implements Node @dontInfer {
      name: String!
      level: String
      skills: String
      talents: String
      abilities: String
      equipment: String
      index: String
      generatedId: String!
    }

    type GearYaml implements Node @dontInfer {
      name: String!
      category: String
      price: Int
      restricted: Boolean
      rarity: Int
      encumbrance: String
      notes: String
      index: String
      generatedId: String!
    }

    type QualitiesYaml implements Node @dontInfer {
      name: String!
      active: String
      ranked: String
      effect: String
      index: String
      generatedId: String!
    }

    type SkillsYaml implements Node @dontInfer {
      name: String!
      characteristic: String
      type: String
      index: String
      generatedId: String!
    }

    type SpeciesYaml implements Node @dontInfer {
      name: String!
      wt: String
      st: String
      brawn: Int
      agility: Int
      intellect: Int
      cunning: Int
      willpower: Int
      presence: Int
      xp: Int
      specialAbilities: String
      notes: String
      index: String
      generatedId: String!
    }

    type StarshipsYaml implements Node @dontInfer {
      name: String!
      category: String
      manufacturer: String
      model: String
      crew: Int
      passengers: Int
      silhouette: Int
      speed: Int
      handling: Int
      armor: Int
      htt: Int
      sst: Int
      defense: String
      sensors: String
      weapons: Int
      encumbrance: Int
      hp: Int
      price: Int
      restricted: Boolean
      rarity: Int
      hyperdrive: String
      navicomputer: String
      additionalRules: String
      notes: String
      index: String
      generatedId: String!
    }

    type TalentsYaml implements Node @dontInfer {
      name: String!
      activation: String
      ranked: String
      forceSensitive: String
      index: String
      generatedId: String!
    }

    type VehicleAttachmentsYaml implements Node @dontInfer {
      name: String!
      hp: Int
      price: Int
      restricted: Boolean
      rarity: Int
      index: String
      generatedId: String!
    }

    type VehiclesYaml implements Node @dontInfer {
      name: String!
      category: String
      manufacturer: String
      model: String
      crew: Int
      passengers: Int
      silhouette: Int
      speed: Int
      handling: Int
      armor: Int
      htt: Int
      sst: Int
      defense: String
      sensors: String
      weapons: Int
      encumbrance: Int
      hp: Int
      price: Int
      restricted: Boolean
      rarity: Int
      notes: String
      index: String
      generatedId: String!
    }

    type VehicleWeaponsYaml implements Node @dontInfer {
      name: String!
      category: String
      range: String
      damage: String
      crit: String
      price: Int
      restricted: Boolean
      rarity: Int
      qualities: String
      compatibleSilhouette: String
      notes: String
      index: String
      generatedId: String!
    }

    type AdditionalRulesYaml implements Node @dontInfer {
      name: String!
      description: String
      index: String
      generatedId: String!
    }

    type AttachmentsYaml implements Node @dontInfer {
      name: String!
      category: String
      price: Int
      restricted: Boolean
      encumbrance: String
      hp: Int
      rarity: String
      notes: String
      index: String
      generatedId: String!
    }

    type WeaponsYaml implements Node @dontInfer {
      name: String!
      category: String
      skill: String
      damage: Int
      brawn: Boolean
      crit: String
      range: String
      encumbrance: Int
      hp: Int
      price: Int
      restricted: Boolean
      rarity: Int
      special: String
      notes: String
      index: String
      generatedId: String!
    }

    type ChangelogItem implements Node @dontInfer {
      item: String
    }

    type ChangelogYaml implements Node @dontInfer {
      date: String!
      items: [ChangelogItem]
    }
  `

  createTypes(typeDefs)
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allBooksYaml {
        nodes {
          generatedId
          name
        }
      }
      allGearYaml {
        nodes {
          generatedId
          name
        }
      }
      allWeaponsYaml {
        nodes {
          generatedId
          name
        }
      }
      allArmorYaml {
        nodes {
          generatedId
          name
        }
      }
      allAttachmentsYaml {
        nodes {
          generatedId
          name
        }
      }
      allQualitiesYaml {
        nodes {
          generatedId
          name
        }
      }
      allVehiclesYaml {
        nodes {
          generatedId
          name
        }
      }
      allVehicleWeaponsYaml {
        nodes {
          generatedId
          name
        }
      }
      allStarshipsYaml {
        nodes {
          generatedId
          name
        }
      }
      allAdditionalRulesYaml {
        nodes {
          generatedId
          name
        }
      }
      allVehicleAttachmentsYaml {
        nodes {
          generatedId
          name
        }
      }
      allSkillsYaml {
        nodes {
          generatedId
          name
        }
      }
      allTalentsYaml {
        nodes {
          generatedId
          name
        }
      }
      allAbilitiesYaml {
        nodes {
          generatedId
          name
        }
      }
      allSpeciesYaml {
        nodes {
          generatedId
          name
        }
      }
      allAdversariesYaml {
        nodes {
          generatedId
          name
        }
      }
      allAdversariesGearYaml {
        nodes {
          generatedId
          name
        }
      }
      allAdversariesWeaponsYaml {
        nodes {
          generatedId
          name
        }
      }
      allAdversariesArmorYaml {
        nodes {
          generatedId
          name
        }
      }
      allCreaturesYaml {
        nodes {
          generatedId
          name
        }
      }
      allCreaturesWeaponsYaml {
        nodes {
          generatedId
          name
        }
      }
    }
  `)

  const resources = [
    `gear`,
    `weapons`,
    `armor`,
    `attachments`,
    `vehicles`,
    `vehicle-weapons`,
    `vehicle-attachments`,
    `additional-rules`,
    `starships`,
    `talents`,
    `abilities`,
    `species`,
    `adversaries`,
    `adversaries-gear`,
    `adversaries-weapons`,
    `adversaries-armor`,
    `creatures`,
    `creatures-weapons`,
  ]

  // Standard resources all follow the same pattern.
  resources.forEach((resource) => {
    data[`all${formatYamlName(resource)}Yaml`].nodes.forEach((node) => {
      const generatedId = node.generatedId
      const path = `/${resource}/${generatedId}/${slugify(node.name)}/`

      actions.createPage({
        path,
        component: require.resolve(`./src/templates/${resource}.js`),
        context: { generatedId },
      })

      actions.createRedirect({
        fromPath: `/${resource}/${generatedId}/`,
        toPath: path,
        isPermanent: true,
        force: true,
      })
    })
  })

  data.allBooksYaml.nodes.forEach((node) => {
    const generatedId = node.generatedId
    const resource = `books`
    const path = `/${resource}/${generatedId}/${slugify(node.name)}/`

    actions.createPage({
      path,
      component: require.resolve(`./src/templates/books.js`),
      context: { generatedId, globSearch: `*${generatedId}:*` },
    })

    actions.createRedirect({
      fromPath: `/${resource}/${generatedId}/`,
      toPath: path,
      isPermanent: true,
      force: true,
    })
  })

  data.allQualitiesYaml.nodes.forEach((node) => {
    const { generatedId, name } = node
    const resource = `qualities`
    const path = `/${resource}/${generatedId}/${slugify(node.name)}/`

    actions.createPage({
      path,
      component: require.resolve(`./src/templates/qualities.js`),
      context: { generatedId, quality: `*${name}*` },
    })

    actions.createRedirect({
      fromPath: `/${resource}/${generatedId}/`,
      toPath: path,
      isPermanent: true,
      force: true,
    })
  })

  data.allSkillsYaml.nodes.forEach((node) => {
    const { generatedId, name } = node
    const resource = `skills`
    const path = `/${resource}/${generatedId}/${slugify(node.name)}/`

    actions.createPage({
      path,
      component: require.resolve(`./src/templates/skills.js`),
      context: { generatedId, skill: `*${name}*` },
    })

    actions.createRedirect({
      fromPath: `/${resource}/${generatedId}/`,
      toPath: path,
      isPermanent: true,
      force: true,
    })
  })
}
