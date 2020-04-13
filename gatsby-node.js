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

function capitalizeFirstLetter(string) {
  const parts = string.split(`-`)
  const first = parts[0].charAt(0).toUpperCase() + parts[0].slice(1)

  if (parts[1]) {
    return [first, parts[1].charAt(0).toUpperCase() + parts[1].slice(1)].join(
      ``
    )
  }

  return first
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
        }
      }
      allWeaponsYaml {
        nodes {
          generatedId
        }
      }
      allArmorYaml {
        nodes {
          generatedId
        }
      }
      allAttachmentsYaml {
        nodes {
          generatedId
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
        }
      }
      allVehicleWeaponsYaml {
        nodes {
          generatedId
        }
      }
      allStarshipsYaml {
        nodes {
          generatedId
        }
      }
      allAdditionalRulesYaml {
        nodes {
          generatedId
        }
      }
      allVehicleAttachmentsYaml {
        nodes {
          generatedId
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
        }
      }
      allAbilitiesYaml {
        nodes {
          generatedId
        }
      }
      allSpeciesYaml {
        nodes {
          generatedId
        }
      }
      allAdversariesYaml {
        nodes {
          generatedId
        }
      }
      allAdversariesGearYaml {
        nodes {
          generatedId
        }
      }
      allAdversariesWeaponsYaml {
        nodes {
          generatedId
        }
      }
      allAdversariesArmorYaml {
        nodes {
          generatedId
        }
      }
      allCreaturesYaml {
        nodes {
          generatedId
        }
      }
      allCreaturesWeaponsYaml {
        nodes {
          generatedId
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
    data[`all${capitalizeFirstLetter(resource)}Yaml`].nodes.forEach((node) => {
      const generatedId = node.generatedId
      actions.createPage({
        path: `/${resource}/${generatedId}/`,
        component: require.resolve(`./src/templates/${resource}.js`),
        context: { generatedId },
      })
    })
  })

  data.allBooksYaml.nodes.forEach((node) => {
    const generatedId = node.generatedId
    actions.createPage({
      path: `/books/${generatedId}/`,
      component: require.resolve(`./src/templates/books.js`),
      context: { generatedId, globSearch: `*${generatedId}:*` },
    })
  })

  data.allQualitiesYaml.nodes.forEach((node) => {
    const { generatedId, name } = node
    actions.createPage({
      path: `/qualities/${generatedId}/`,
      component: require.resolve(`./src/templates/qualities.js`),
      context: { generatedId, quality: `*${name}*` },
    })
  })

  data.allSkillsYaml.nodes.forEach((node) => {
    const { generatedId, name } = node
    actions.createPage({
      path: `/skills/${generatedId}/`,
      component: require.resolve(`./src/templates/skills.js`),
      context: { generatedId, skill: `*${name}*` },
    })
  })
}
