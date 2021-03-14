import {
  Box,
  Divider,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  GithubIcon,
  NpmIcon,
  FlutterIcon,
  RightArrowIcon,
} from '../Common/Icons';

const SourceCode = () => {
  const links = [
    {
      name: 'blobs.app',
      icon: GithubIcon,
      link: 'https://github.com/lokesh-coder/blobs.app',
      desc: "Blobs application's source",
    },
    {
      name: 'Blob generator',
      desc: 'Create fixed blob shape using seed',
      icon: GithubIcon,
      link: 'https://github.com/lokesh-coder/blobshape',
    },
    {
      name: 'Flutter blobs',
      desc: 'Generate blobs for Flutter apps',
      icon: GithubIcon,
      link: 'https://github.com/lokesh-coder/flutter_blobs',
    },
    {
      name: 'blobshape',
      desc: 'Node package of blob generator',
      icon: NpmIcon,
      link: 'https://www.npmjs.com/package/blobshape',
    },
    {
      name: 'blobs',
      desc: 'Dart package for blob generator',
      icon: FlutterIcon,
      link: 'https://pub.dev/packages/blobs',
    },
  ];
  return (
    <Box>
      {links.map((link, index) => (
        <>
          <Box
            py="3"
            px="2"
            rounded="lg"
            _hover={{
              transform: 'scale(1.05)',
              transition: 'all 0.5s ease',
              bg: 'rgba(0,0,0,0.1)',
            }}
          >
            <LinkBox as="article">
              <Flex alignItems="center">
                <Box>
                  <link.icon fontSize="25px" color="gray.500" mr="5" />
                </Box>
                <Box flex="1" pr="2">
                  <LinkOverlay href={link.link} isExternal>
                    <Heading color="primary" fontSize="md">
                      {link.name}
                    </Heading>
                  </LinkOverlay>
                  <Text fontSize="sm">{link.desc}</Text>
                </Box>
                <Box>
                  <RightArrowIcon fontSize="20px" color="gray.400" />
                </Box>
              </Flex>
            </LinkBox>
          </Box>
          {index !== 4 && <Divider borderStyle="dashed" />}
        </>
      ))}
    </Box>
  );
};

export default SourceCode;
