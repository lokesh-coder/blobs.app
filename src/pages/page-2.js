import * as React from 'react';
import { Link } from 'gatsby';

import { Box, Center, Heading, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import SEO from '../components/seo';

import Logo from '../components/Logo';
import SavedBlobs from '../components/SavedBlobs';
import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <SEO
      title="Save blobs locally and access them anytime even when in offline"
      description="Customizable blobs as SVG and Flutter Widget. Create random or fixed blobs, loop, animate, clip them with ease"
    />
    <Box my="10" textAlign="center">
      <Logo />
      <Heading
        size="xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
        variant="main"
      >
        Browse saved blobs
      </Heading>
      <Text my="2" variant="subtle">
        Click on the any blob card to navigate to edit screen
      </Text>
    </Box>
    <SavedBlobs />
    <Center>
      <Link to="/">
        {' '}
        <ArrowBackIcon />
        Go back to the homepage
      </Link>
    </Center>
  </Layout>
);

export default SecondPage;
