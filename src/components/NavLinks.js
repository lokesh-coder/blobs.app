import { Button } from "@chakra-ui/button"
import { Box, Center, HStack, Text, Link } from "@chakra-ui/layout"
import React from "react"
import { Link as GatbsyLink } from "gatsby"
import { SavedIcon, TwitterIcon, BookmarkIcon } from "./icons"
import { saveBlobDataLocally } from "../utilities"
import { useToast } from "@chakra-ui/toast"

const NavLinks = () => {
  const toast = useToast()
  return (
    <Box px="10" pt="3">
      <Center>
        <HStack spacing="2px" fontSize="sm">
          <Box as={Text}>
            <Button
              variant="heavy"
              leftIcon={<BookmarkIcon fontSize="18px" />}
              aria-label="Save blob"
              onClick={() => {
                saveBlobDataLocally()
                toast({
                  render: () => (
                    <Box
                      bg="primary"
                      my="10"
                      py="3"
                      px="5"
                      rounded="lg"
                      color="white"
                      textAlign="center"
                      fontWeight="500"
                      shadow="xl"
                    >
                      Toast Saved!
                    </Box>
                  ),
                  duration: 2000,
                })
              }}
            >
              Save
            </Button>
          </Box>

          <Box as={Text}>
            <Button
              href="/page-2/"
              as={GatbsyLink}
              variant="heavy"
              leftIcon={<SavedIcon fontSize="18px" />}
              aria-label="Saved blobs"
            >
              Saved blobs
            </Button>
          </Box>
          <Box as={Text}>
            <Button
              href="http://www.twitter.com/intent/tweet?url=https://blobs.app/&text=Generate%20beautiful%20blob%20shapes%20for%20web%20and%20flutter%20apps"
              target="_blank"
              as={Link}
              variant="heavy"
              leftIcon={<TwitterIcon fontSize="18px" />}
              aria-label="Share"
            >
              Share
            </Button>
          </Box>
        </HStack>
      </Center>
    </Box>
  )
}

export default NavLinks
