const webpack = require("webpack") // to access webpack.ProvidePlugin

function capitalizeFirstLetter(string) { // Capitalizing the first letter of a string
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function formatYamlName(name) { // Formatting the name of a YAML file
  const parts = name.split(`-`) // Splitting the name by `-` to get the parts
  const first = capitalizeFirstLetter(parts[0]) // Capitalizing the first part

  return parts[1] ? [first, capitalizeFirstLetter(parts[1])].join(``) : first // Returning the first part capitalized and the second part capitalized if it exists
}

exports.createSchemaCustomization = ({ actions }) => { // Creating the schema customization
  const { createTypes } = actions // Destructuring the createTypes action

  // Defining the types
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

  createTypes(typeDefs) // Creating the types
}

exports.createPages = async function ({ actions, graphql }) { // returning a promise so we can await the results of the graphql query
  // Creating the pages, one for each book like Edge of the Empire, Age of Rebellion, etc.
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
    // Creating the pages, one for each resource  (gear, weapons, armor, etc.)
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
  resources.forEach((resource) => { // Looping through the resources array to create the pages for each resource
    data[`all${formatYamlName(resource)}Yaml`].nodes.forEach((node) => { // Looping through the nodes of each resource
      const generatedId = node.generatedId // Getting the generatedId of the node
      actions.createPage({ // Creating the page for the node of the resource
        path: `/${resource}/${generatedId}/`, // The path of the page
        component: require.resolve(`./src/templates/${resource}.js`), // The component of the page (the template) - the require.resolve() is needed to get the absolute path of the template
        context: { generatedId }, // The context of the page, which is the generatedId of the node
      })
    })
  })

  data.allBooksYaml.nodes.forEach((node) => { // Looping through the nodes of the books
    const generatedId = node.generatedId // Getting the generatedId of the node for the book
    actions.createPage({ // Creating the page for the node for the book
      path: `/books/${generatedId}/`, // The path of the page for the book
      component: require.resolve(`./src/templates/books.js`), // The component of the page (the template) - the require.resolve() is needed to get the absolute path of the template
      context: { generatedId, globSearch: `*${generatedId}:*` }, // The context of the page, which is the generatedId of the node and the globSearch for the book
    })
  })

  data.allQualitiesYaml.nodes.forEach((node) => { // Looping through the nodes of the qualities
    const { generatedId, name } = node // Getting the generatedId and name of the node for the quality
    actions.createPage({ // Creating the page for the node for the quality
      path: `/qualities/${generatedId}/`, // The path of the page for the quality (the generatedId is used for the path)
      component: require.resolve(`./src/templates/qualities.js`), // The component of the page (the template) - the require.resolve() is needed to get the absolute path of the template
      context: { generatedId, quality: `*${name}*` }, // The context of the page, which is the generatedId of the node and the quality for the quality
    })
  })

  data.allSkillsYaml.nodes.forEach((node) => { // Looping through the nodes of the skills
    const { generatedId, name } = node // Getting the generatedId and name of the node for the skill
    actions.createPage({ // Creating the page for the node for the skill
      path: `/skills/${generatedId}/`, // The path of the page for the skill (the generatedId is used for the path)
      component: require.resolve(`./src/templates/skills.js`), // The component of the page (the template) - the require.resolve() is needed to get the absolute path of the template
      context: { generatedId, skill: `*${name}*` }, // The context of the page, which is the generatedId of the node and the skill for the skill
    })
  })
}

exports.onCreateWebpackConfig = ({ // Creating the webpack config
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({ // Setting the webpack config
    plugins: [
      new webpack.ProvidePlugin({
        process: `process/browser`,
      }),
    ],
  })
}
