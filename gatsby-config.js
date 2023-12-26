module.exports = {
  siteMetadata: {
    title: 'Rune Fjellheim AS',
    author: 'Rune Fjellheim',
    description: 'Mánus mánnui',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Rune Fjellheim AS',
        short_name: 'starter',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
