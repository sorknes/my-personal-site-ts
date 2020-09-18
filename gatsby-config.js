/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Knut Sorknes's personal site`,
    description: `A short description...`,
    author: {
      name: `Knut Sorknes`,
      url: `https://somedomain.com`,
      email: `knut.sorknes@gmail.com`,
    },
    siteUrl: `https://somedomain.com`,
    social: {
      facebook: `Knut Sorknes`,
      linkedin: `Knut Sorknes`,
      instagram: `knutsorknes`,
      twitter: `@knutsorknes`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
  ],
}
