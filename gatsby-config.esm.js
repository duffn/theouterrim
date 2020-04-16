import { slugify } from "./src/utils/slugify"

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
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#D9435F`,
        showSpinner: false,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`name`],
        resolvers: {
          AbilitiesYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/abilities/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Ability`,
          },
          AdversariesArmorYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/adversaries-armor/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Adversary Armor`,
          },
          AdditionalRulesYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/additional-rules/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Additional Rules`,
          },
          AdversariesGearYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/adversaries-gear/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Adversary Gear`,
          },
          AdversariesWeaponsYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/adversaries-weapons/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Adversary Weapon`,
          },
          AdversariesYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/adversaries/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Adversary`,
          },
          ArmorYaml: {
            name: (node) => node.name,
            link: (node) => `/armor/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Armor`,
          },
          BooksYaml: {
            name: (node) => node.name,
            link: (node) => `/books/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Book`,
          },
          CreaturesWeaponsYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/creatures-weapons/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Creature Weapon`,
          },
          CreaturesYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/creatures/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Creature`,
          },
          GearYaml: {
            name: (node) => node.name,
            link: (node) => `/gear/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Gear`,
          },
          QualitiesYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/qualities/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Quality`,
          },
          SkillsYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/skills/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Skill`,
          },
          SpeciesYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/species/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Species`,
          },
          StarshipsYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/starships/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Starship`,
          },
          TalentsYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/talents/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Talent`,
          },
          VehicleAttachmentsYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/vehicle-attachments/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Vehicle Attachment`,
          },
          VehicleWeaponsYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/vehicle-weapons/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Vehicle Weapon`,
          },
          VehiclesYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/vehicles/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Vehicle`,
          },
          AttachmentsYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/attachments/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Attachment`,
          },
          WeaponsYaml: {
            name: (node) => node.name,
            link: (node) =>
              `/weapons/${node.generatedId}/${slugify(node.name)}/`,
            generatedId: (node) => node.generatedId,
            resourceType: (node) => `Weapon`,
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
