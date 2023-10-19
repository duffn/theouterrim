module.exports = { // exports the babelOptions variable
  plugins: [
    `gatsby-plugin-material-ui`, // this is the path to the gatsby-plugin-material-ui package
    `gatsby-plugin-react-helmet`, // this is the path to the gatsby-plugin-react-helmet package
    `gatsby-transformer-yaml`, // this is the path to the gatsby-transformer-yaml package
    {
      resolve: `gatsby-source-filesystem`, // this is the path to the gatsby-source-filesystem package
      options: { // options is a variable that contains the following files
        path: `${__dirname}/src/data`, // this is the path to the src/data folder
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`, // this is the path to the gatsby-plugin-google-analytics package
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || `abcd1234`, // this is the tracking ID for Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, // this is the path to the gatsby-plugin-manifest package
      options: { // options is a variable that contains the following files
        name: `The Outer Rim`, // this is the name of the website
        short_name: `The Outer Rim`, // this is the short name of the website
        start_url: `/`, // this is the start URL of the website
        background_color: `#ffffff`, // this is the background color of the website
        theme_color: `#033E8C`, // this is the theme color of the website
        display: `minimal-ui`, // this is the display of the website
        icon: `src/images/tor.png`, // this is the path to the tor.png file
      },
    },
    `gatsby-plugin-netlify`, // this is the path to the gatsby-plugin-netlify package
    `gatsby-plugin-sitemap`, // this is the path to the gatsby-plugin-sitemap package
    {
      resolve: `gatsby-plugin-robots-txt`, // this is the path to the gatsby-plugin-robots-txt package
      options: { // options is a variable that contains the following files
        host: `https://theouterrim.co`, // this is the host of the website
        sitemap: `https://theouterrim.co/sitemap.xml`, // this is the sitemap of the website
        policy: [{ userAgent: `*`, allow: `/` }], // this is the policy of the website
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`, // this is the path to the gatsby-plugin-nprogress package
      options: { // options is a variable that contains the following files
        color: `#D9435F`, // this is the color of the progress bar
        showSpinner: false, // this is the showSpinner of the progress bar
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`, // this is the path to the @gatsby-contrib/gatsby-plugin-elasticlunr-search package
      options: { // options is a variable that contains the following files
        fields: [`name`], // this is the fields of the search bar
        resolvers: { // resolvers is a variable that contains the following files
          AbilitiesYaml: { // this is the AbilitiesYaml file
            name: (node) => node.name, // this is the name of the node
            link: (node) => `/abilities/${node.generatedId}/`, // this is the link of the AbilitiesYaml node
            generatedId: (node) => node.generatedId, // this is the generatedId of the AbilitiesYaml node
            resourceType: (node) => `Ability`, // this is the resourceType of the AbilitiesYaml node
          },
          AdversariesArmorYaml: { // this is the AdversariesArmorYaml file
            name: (node) => node.name, // this is the name of the node
            link: (node) => `/adversaries-armor/${node.generatedId}/`, // this is the link of the AdversonariesArmorYaml node
            generatedId: (node) => node.generatedId, // this is the generatedId of the AdversariesArmorYaml node
            resourceType: (node) => `Adversary Armor`, // this is the resourceType of the AdversariesArmorYaml node
          },
          AdditionalRulesYaml: { // this is the AdditionalRulesYaml file
            name: (node) => node.name, // this is the name of the node
            link: (node) => `/additional-rules/${node.generatedId}/`, // this is the link of the AdditionalRulesYaml node
            generatedId: (node) => node.generatedId, // this is the generatedId of the AdditionalRulesYaml node
            resourceType: (node) => `Additional Rules`, // this is the resourceType of the AdditionalRulesYaml node
          },
          AdversariesGearYaml: {
            name: (node) => node.name, // this is the name of the node
            link: (node) => `/adversaries-gear/${node.generatedId}/`, // this is the link of the AdversariesGearYaml node
            generatedId: (node) => node.generatedId, // this is the generatedId of the AdversariesGearYaml node
            resourceType: (node) => `Adversary Gear`, // this is the resourceType of the AdversariesGearYaml node
          },
          AdversariesWeaponsYaml: {
            name: (node) => node.name, // name of node
            link: (node) => `/adversaries-weapons/${node.generatedId}/`, // link of AdversariesWeaponsYaml node
            generatedId: (node) => node.generatedId, // generatedId of AdversariesWeaponsYaml node
            resourceType: (node) => `Adversary Weapon`, // resourceType of AdversariesWeaponsYaml node
          },
          AdversariesYaml: {
            name: (node) => node.name, // name of node
            link: (node) => `/adversaries/${node.generatedId}/`, // link of AdversariesYaml node
            generatedId: (node) => node.generatedId, // generatedId of AdversariesYaml node
            resourceType: (node) => `Adversary`, // resourceType of AdversariesYaml node
          },
          ArmorYaml: {
            name: (node) => node.name, // name of node
            link: (node) => `/armor/${node.generatedId}/`, // link of ArmorYaml node
            generatedId: (node) => node.generatedId, // generatedId of ArmorYaml node
            resourceType: (node) => `Armor`, // resourceType of ArmorYaml node
          },
          BooksYaml: {
            name: (node) => node.name, // name of node
            link: (node) => `/books/${node.generatedId}/`, // link of BooksYaml node
            generatedId: (node) => node.generatedId, // generatedId of BooksYaml node
            resourceType: (node) => `Book`, // resourceType of BooksYaml node
          },
          CreaturesWeaponsYaml: {
            name: (node) => node.name, // name of node
            link: (node) => `/creatures-weapons/${node.generatedId}/`, // link of CreaturesWeaponsYaml node
            generatedId: (node) => node.generatedId, // generatedId of CreaturesWeaponsYaml node
            resourceType: (node) => `Creature Weapon`, // resourceType of CreaturesWeaponsYaml node
          },
          CreaturesYaml: {
            name: (node) => node.name, // name of node
            link: (node) => `/creatures/${node.generatedId}/`, // link of CreaturesYaml node
            generatedId: (node) => node.generatedId, // generatedId of CreaturesYaml node
            resourceType: (node) => `Creature`, // resourceType of CreaturesYaml node
          },
          GearYaml: {
            name: (node) => node.name, // name of node
            link: (node) => `/gear/${node.generatedId}/`, // link of GearYaml node
            generatedId: (node) => node.generatedId, // generatedId of GearYaml node
            resourceType: (node) => `Gear`, // resourceType of  GearYaml node
          },
          QualitiesYaml: {
            name: (node) => node.name, // name of node
            link: (node) => `/qualities/${node.generatedId}/`, // link of QualitiesYaml node
            generatedId: (node) => node.generatedId, // generatedId of QualitiesYaml node
            resourceType: (node) => `Quality`, // resourceType of QualitiesYaml node
          },
          SkillsYaml: {
            name: (node) => node.name, //   name of node
            link: (node) => `/skills/${node.generatedId}/`, // link of SkillsYaml node
            generatedId: (node) => node.generatedId, // generatedId of SkillsYaml node
            resourceType: (node) => `Skill`, // resourceType of SkillsYaml node
          },
          SpeciesYaml: {
            name: (node) => node.name, // SpeciesYaml name
            link: (node) => `/species/${node.generatedId}/`, // SpeciesYaml link
            generatedId: (node) => node.generatedId, // SpeciesYaml generatedId
            resourceType: (node) => `Species`, // SpeciesYaml resourceType
          },
          StarshipsYaml: {
            name: (node) => node.name, // StarshipsYaml name
            link: (node) => `/starships/${node.generatedId}/`, // StarshipsYaml link
            generatedId: (node) => node.generatedId, // StarshipsYaml generatedId
            resourceType: (node) => `Starship`, // StarshipsYaml resourceType
          },
          TalentsYaml: {
            name: (node) => node.name, // TalentsYaml name
            link: (node) => `/talents/${node.generatedId}/`, // TalentsYaml link
            generatedId: (node) => node.generatedId, // TalentsYaml generatedId
            resourceType: (node) => `Talent`, // TalentsYaml resourceType
          },
          VehicleAttachmentsYaml: {
            name: (node) => node.name, // VehicleAttachmentsYaml name
            link: (node) => `/vehicle-attachments/${node.generatedId}/`, //  VehicleAttachmentsYaml link
            generatedId: (node) => node.generatedId, // VehicleAttachmentsYaml generatedId
            resourceType: (node) => `Vehicle Attachment`, // VehicleAttachmentsYaml resourceType
          },
          VehicleWeaponsYaml: {
            name: (node) => node.name, // VehicleWeaponsYaml name
            link: (node) => `/vehicle-weapons/${node.generatedId}/`, // VehicleWeaponsYaml link
            generatedId: (node) => node.generatedId, // VehicleWeaponsYaml generatedId
            resourceType: (node) => `Vehicle Weapon`, // VehicleWeaponsYaml resourceType
          },
          VehiclesYaml: {
            name: (node) => node.name, // VehiclesYaml name
            link: (node) => `/vehicles/${node.generatedId}/`, // VehiclesYaml link
            generatedId: (node) => node.generatedId, // VehiclesYaml generatedId
            resourceType: (node) => `Vehicle`, // VehiclesYaml resourceType
          },
          AttachmentsYaml: {
            name: (node) => node.name, // AttachmentsYaml name
            link: (node) => `/attachments/${node.generatedId}/`, // AttachmentsYaml link
            generatedId: (node) => node.generatedId, // AttachmentsYaml generatedId
            resourceType: (node) => `Attachment`, // AttachmentsYaml resourceType
          },
          WeaponsYaml: {
            name: (node) => node.name, // WeaponsYaml name
            link: (node) => `/weapons/${node.generatedId}/`, // WeaponsYaml link
            generatedId: (node) => node.generatedId, // WeaponsYaml generatedId
            resourceType: (node) => `Weapon`, // WeaponsYaml resourceType
          },
        },
      },
    },
  ],
  siteMetadata: { // siteMetadata is a variable that contains the following files
    title: `The Outer Rim`, // this is the title of the website
    description: `Star Wars role-playing game stats from The Outer Rim.`, // this is the description of the website
    author: `@duffn`, // this is the author of the website
    siteUrl: `https://theouterrim.co`, // this is the site URL of the website
  },
}
