import { Heading, Text } from "@chakra-ui/react"
import React from "react"
import SEO from "../components/seo"
const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Heading>404: Not Found</Heading>
    <Text fontSize="xl" my={5}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Text>
  </>
)
export default NotFoundPage
