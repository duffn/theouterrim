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
  ],
  siteMetadata: {
    title: `The Outer Rim`,
    description: `Star Wars role-playing game stats from The Outer Rim.`,
    author: `@duffn`,
    siteUrl: `https://theouterrim.co`,
  },
}
