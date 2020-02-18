exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type WeaponsYaml implements Node {
      crit: String
      price: String
    }

    type GearYaml implements Node {
      price: String
    }

    type ArmorYaml implements Node {
      price: String
    }

    type WeaponAttachmentsYaml implements Node {
      price: String
    }

    type VehiclesYaml implements Node {
      price: String
      model: String
    }

    type StarshipsYaml implements Node {
      price: String
      model: String
    }

    type VehicleAttachmentsYaml implements Node {
      price: String
    }

    type AdversariesWeaponsYaml implements Node {
      crit: String
    }

    type CreaturesWeaponsYaml implements Node {
      crit: String
    }
  `

  createTypes(typeDefs)
}

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allBooksYaml {
        edges {
          node {
            generatedId
            initials
          }
        }
      }
      allGearYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allWeaponsYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allArmorYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allWeaponAttachmentsYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allQualitiesYaml {
        edges {
          node {
            generatedId
            name
          }
        }
      }
      allVehiclesYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allStarshipsYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allVehicleAttachmentsYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allSkillsYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allTalentsYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allAbilitiesYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allSpeciesYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allAdversariesYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allAdversariesGearYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allAdversariesWeaponsYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allAdversariesArmorYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allCreaturesYaml {
        edges {
          node {
            generatedId
          }
        }
      }
      allCreaturesWeaponsYaml {
        edges {
          node {
            generatedId
          }
        }
      }
    }
  `)

  data.allGearYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/gear/${generatedId}`,
      component: require.resolve(`./src/templates/gear.js`),
      context: { generatedId },
    })
  })

  data.allBooksYaml.edges.forEach(edge => {
    const { generatedId, initials } = edge.node
    actions.createPage({
      path: `/books/${generatedId}`,
      component: require.resolve(`./src/templates/books.js`),
      context: { generatedId, initials: `${initials}:*` },
    })
  })

  data.allWeaponsYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/weapons/${generatedId}`,
      component: require.resolve(`./src/templates/weapons.js`),
      context: { generatedId },
    })
  })

  data.allArmorYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/armor/${generatedId}`,
      component: require.resolve(`./src/templates/armor.js`),
      context: { generatedId },
    })
  })

  data.allWeaponAttachmentsYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/weapon-attachments/${generatedId}`,
      component: require.resolve(`./src/templates/weapon-attachments.js`),
      context: { generatedId },
    })
  })

  data.allQualitiesYaml.edges.forEach(edge => {
    const { generatedId, name } = edge.node
    actions.createPage({
      path: `/qualities/${generatedId}`,
      component: require.resolve(`./src/templates/qualities.js`),
      context: { generatedId, quality: `*${name}*` },
    })
  })

  data.allVehiclesYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/vehicles/${generatedId}`,
      component: require.resolve(`./src/templates/vehicles.js`),
      context: { generatedId },
    })
  })

  data.allStarshipsYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/starships/${generatedId}`,
      component: require.resolve(`./src/templates/starships.js`),
      context: { generatedId },
    })
  })

  data.allVehicleAttachmentsYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/vehicle-attachments/${generatedId}`,
      component: require.resolve(`./src/templates/vehicle-attachments.js`),
      context: { generatedId },
    })
  })

  data.allSkillsYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/skills/${generatedId}`,
      component: require.resolve(`./src/templates/skills.js`),
      context: { generatedId },
    })
  })

  data.allTalentsYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/talents/${generatedId}`,
      component: require.resolve(`./src/templates/talents.js`),
      context: { generatedId },
    })
  })

  data.allAbilitiesYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/abilities/${generatedId}`,
      component: require.resolve(`./src/templates/abilities.js`),
      context: { generatedId },
    })
  })

  data.allSpeciesYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/species/${generatedId}`,
      component: require.resolve(`./src/templates/species.js`),
      context: { generatedId },
    })
  })

  data.allAdversariesYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/adversaries/${generatedId}`,
      component: require.resolve(`./src/templates/adversaries.js`),
      context: { generatedId },
    })
  })

  data.allAdversariesGearYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/adversaries-gear/${generatedId}`,
      component: require.resolve(`./src/templates/adversaries-gear.js`),
      context: { generatedId },
    })
  })

  data.allAdversariesWeaponsYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/adversaries-weapons/${generatedId}`,
      component: require.resolve(`./src/templates/adversaries-weapons.js`),
      context: { generatedId },
    })
  })

  data.allAdversariesArmorYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/adversaries-armor/${generatedId}`,
      component: require.resolve(`./src/templates/adversaries-armor.js`),
      context: { generatedId },
    })
  })

  data.allCreaturesYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/creatures/${generatedId}`,
      component: require.resolve(`./src/templates/creatures.js`),
      context: { generatedId },
    })
  })

  data.allCreaturesWeaponsYaml.edges.forEach(edge => {
    const generatedId = edge.node.generatedId
    actions.createPage({
      path: `/creatures-weapons/${generatedId}`,
      component: require.resolve(`./src/templates/creatures-weapons.js`),
      context: { generatedId },
    })
  })
}
