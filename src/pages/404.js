import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import SEO from '../components/SEO';
import Logo from '../components/Common/Logo';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />

    <Box textAlign="center" py="24">
      <Logo />
      <Heading>404: Not Found</Heading>
      <Text fontSize="xl" my={5}>
        You just hit a route that doesn&#39;t exist...
      </Text>
    </Box>
  </>
);
export default NotFoundPage;
