module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Outer Rim`,
        short_name: `The Outer Rim`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#033E8C`,
        display: `minimal-ui`,
        icon: `src/images/tor.png`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://theouterrim.co`,
        sitemap: `https://theouterrim.co/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`name`],
        resolvers: {
          AbilitiesYaml: {
            name: node => node.name,
            link: node => `/abilities/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Ability`,
          },
          AdversariesArmorYaml: {
            name: node => node.name,
            link: node => `/adversaries-armor/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Adversary Armor`,
          },
          AdversariesGearYaml: {
            name: node => node.name,
            link: node => `/adversaries-gear/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Adversary Gear`,
          },
          AdversariesWeaponsYaml: {
            name: node => node.name,
            link: node => `/adversaries-weapons/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Adversary Weapon`,
          },
          AdversariesYaml: {
            name: node => node.name,
            link: node => `/adversaries/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Adversary`,
          },
          ArmorYaml: {
            name: node => node.name,
            link: node => `/armor/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Armor`,
          },
          BooksYaml: {
            name: node => node.name,
            link: node => `/books/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Book`,
          },
          CreaturesWeaponsYaml: {
            name: node => node.name,
            link: node => `/creatures-weapons/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Creature Weapon`,
          },
          CreaturesYaml: {
            name: node => node.name,
            link: node => `/creatures/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Creature`,
          },
          GearYaml: {
            name: node => node.name,
            link: node => `/gear/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Gear`,
          },
          QualitiesYaml: {
            name: node => node.name,
            link: node => `/qualities/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Quality`,
          },
          SkillsYaml: {
            name: node => node.name,
            link: node => `/skills/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Skill`,
          },
          SpeciesYaml: {
            name: node => node.name,
            link: node => `/species/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Species`,
          },
          StarshipsYaml: {
            name: node => node.name,
            link: node => `/starships/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Starship`,
          },
          TalentsYaml: {
            name: node => node.name,
            link: node => `/talents/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Talent`,
          },
          VehicleAttachmentsYaml: {
            name: node => node.name,
            link: node => `/vehicle-attachments/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Vehicle Attachment`,
          },
          VehiclesYaml: {
            name: node => node.name,
            link: node => `/vehicles/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Vehicle`,
          },
          AttachmentsYaml: {
            name: node => node.name,
            link: node => `/attachments/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Attachment`,
          },
          WeaponsYaml: {
            name: node => node.name,
            link: node => `/weapons/${node.generatedId}/`,
            generatedId: node => node.generatedId,
            resourceType: node => `Weapon`,
          },
        },
      },
    },
  ],
  siteMetadata: {
    title: `The Outer Rim`,
    description: `Star Wars role-playing game stats from The Outer Rim.`,
    author: `@duffn`,
    siteUrl: `https://theouterrim.co`,
  },
}
