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
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'), // This line tells Gatsby to use Dart Sass
      },
    },
  ],
}
