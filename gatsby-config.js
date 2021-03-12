module.exports = {
  siteMetadata: {
    siteUrl: 'https://blobs.app',
    name: 'blobs.app',
    description: 'Generate beautiful blob shapesfor web and flutter apps',
    short_name: 'Blob generator',
    start_url: '/',
    background_color: '#d7819b',
    theme_color: '#d7819b',
    display: 'minimal-ui',
    icon: 'src/images/blobs.png',
    author: '@lokesh_coder',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'blobs.app',
        short_name: 'Blob generator',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/blobs.png',
      },
    },
    'gatsby-plugin-offline',
    '@chakra-ui/gatsby-plugin',
  ],
};
