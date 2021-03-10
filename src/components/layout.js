/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  Box,
  Container,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react"

import Footer from "./Footer"

const Layout = ({ children }) => {
  const theme = useColorModeValue("light", "dark")
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
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
        <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
      </Container>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
