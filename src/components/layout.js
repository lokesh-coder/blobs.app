import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { Provider } from 'redux-zero/react';
import { store } from '../state';

import Footer from './Footer';

const Layout = ({ children }) => {
  const theme = useColorModeValue('light', 'dark');
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Provider store={store}>
      <Box className={theme}>
        <Container
          maxW="container.xl"
          flex="1"
          display="flex"
          flexDir="column"
          minH="100vh"
        >
          <Box as="main" flex="1" display="flex" flexDir="column">
            {children}
          </Box>
          <Footer siteTitle={data.site.siteMetadata?.title || 'Title'} />
        </Container>
      </Box>
    </Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
