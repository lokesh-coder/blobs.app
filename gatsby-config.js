module.exports = {
  pathPrefix:'/blobs.app/',
  siteMetadata: {
    siteUrl: 'https://blobs.app',
    name: 'blobs.app',
    description: 'Generate beautiful blob shapesfor web and flutter apps',
    descriptionLong:
      'Customizable blobs as SVG and Flutter Widget. Create random or fixed blobs, loop, animate, clip them with ease',
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
    'gatsby-plugin-offline',
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
        background_color: '#ffffff',
        theme_color: '#d7819b',
        display: 'standalone',
        icon: 'src/images/blobs.png',
      },
    },

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-167428362-1',
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
        portalZIndex: 40,
      },
    },
  ],
};
