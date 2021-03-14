/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Button,
  Divider,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { dynamic } from '../state';
import Blob from './blob';
import { TrashIcon } from './icons';

const SavedBlobs = ({ savedBlobs = [], deleteBlob, loadBlobs }) => {
  const cardHoverBg = useColorModeValue('gray.100', 'gray.700');
  console.log('savedBlobs', savedBlobs);
  useEffect(() => {
    if (!savedBlobs) loadBlobs();
  }, [savedBlobs]);
  return (
    <Box>
      {savedBlobs?.length === 0 && (
        <Box textAlign="center">
          <Text my="20" fontSize="2xl">
            No saved blobs found!
          </Text>
        </Box>
      )}
      <SimpleGrid
        columns={{ sm: 2, md: 4 }}
        spacing="40px"
        mb="20"
        justifyContent="center"
      >
        {savedBlobs?.map((blob) => (
          <LinkBox
            // h="200"
            rounded="2xl"
            p="5"
            borderWidth="1px"
            _hover={{ boxShadow: '2xl', background: cardHoverBg }}
            role="group"
          >
            <Text
              fontSize="sm"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <LinkOverlay
                style={{ textTransform: 'uppercase', fontWeight: 600 }}
                href={blob.url}
              >
                {blob.name}
              </LinkOverlay>
              <Button
                variant="unstyled"
                visibility="hidden"
                h="auto"
                _groupHover={{ visibility: 'visible' }}
                onClick={() => {
                  deleteBlob(blob.id);
                }}
              >
                <TrashIcon color="tomato" />
              </Button>
            </Text>
            <Divider mt="4" />

            <Blob {...blob} />
          </LinkBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default dynamic(SavedBlobs, ['savedBlobs']);
