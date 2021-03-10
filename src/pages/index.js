import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Heading, Link, Flex } from "@chakra-ui/react"

import SEO from "../components/seo"
import Settings from "../components/settings"
import Actions from "../components/actions"
import { store } from "../state"
import SaveBlobButton from "../components/Settings/SaveBlobButton"
import Logo from "../components/Logo"
import BlobContainer from "../components/BlobContainer"

const IndexPage = () => {
  const storeData = store.getState()
  React.useEffect(() => {
    // loadBlobFromURLData(setStore, storeData)
  }, [])

  React.useEffect(() => {
    // if (storeData.svgPath) loadRandomBlob(storeData, setStore)
    // loadBlobFromURLData(setStore, storeData)
  }, [...Object.keys(storeData)])
  return (
    <>
      <SEO title="Home" />
      <Flex wrap="wrap" flex="1">
        <Box
          w={{ sm: "100%", lg: 8 / 12 }}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Box w={{ sm: "100%", lg: 500 }} h={{ lg: 500 }}>
            {/* <Blob {...props} /> */}
            <BlobContainer />
          </Box>
          <Actions />
        </Box>

        <Box
          flex="1"
          display="flex"
          alignItems="center"
          w={{ sm: "100%", lg: 4 / 12 }}
        >
          <Box w="full">
            <Flex align="center" justify="center" direction="column" mb="8">
              <Logo />
              <Heading fontSize="3xl" variant="main">
                Generate blobs
              </Heading>
            </Flex>
            <Settings />
            <Link
              as={GatsbyLink}
              textDecor="underline"
              color="purple.500"
              fontSize="xl"
              to="/page-2/"
              _mediaDark={{ color: "green.300" }}
              _dark={{ color: "green.300" }}
            >
              Go to page 22
            </Link>
            <SaveBlobButton />
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default IndexPage
