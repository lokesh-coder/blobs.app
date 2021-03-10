import * as React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Blob from "../components/blob"
import { getLocallySavedBlobs, deleteLocallySavedBlob } from "../utilities"
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { TrashIcon } from "../components/icons"
import Logo from "../components/Logo"
import { ArrowBackIcon } from "@chakra-ui/icons"

const SecondPage = () => {
  const cardHoverBg = useColorModeValue("gray.100", "gray.700")
  const blobs = getLocallySavedBlobs() || []
  const getBlobData = data => {
    return { ...data, size: 500 }
  }

  return (
    <>
      <SEO title="Page two" />
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
      {blobs.length === 0 && (
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
        {blobs.map(blob => {
          const ID = `${blob.edges}-${blob.growth}-${blob.seed}`
          return (
            <LinkBox
              h="200"
              rounded="2xl"
              p="5"
              borderWidth="1px"
              _hover={{ boxShadow: "2xl", background: cardHoverBg }}
              role="group"
            >
              <Text
                fontSize="sm"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <LinkOverlay
                  style={{ textTransform: "uppercase" }}
                  href={blob.url}
                >
                  {blob.name}
                </LinkOverlay>
                <Button
                  variant="unstyled"
                  visibility="hidden"
                  h="auto"
                  _groupHover={{ visibility: "visible" }}
                  onClick={() => {
                    deleteLocallySavedBlob(blob.id)
                    window.location.reload()
                  }}
                >
                  <TrashIcon color="tomato" />
                </Button>
              </Text>
              <Divider mt="4" />

              <Blob {...getBlobData(blob)} />
            </LinkBox>
          )
        })}
      </SimpleGrid>
      <Center>
        <Link to="/">
          {" "}
          <ArrowBackIcon /> Go back to the homepage
        </Link>
      </Center>
    </>
  )
}

export default SecondPage
