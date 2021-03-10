import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"
import { Provider } from "redux-zero/react"
import Layout from "./components/layout"
import { store } from "./state"
import { mode } from "@chakra-ui/theme-tools"
export const wrapPageElement = ({ element }) => {
  const theme = extendTheme({
    fonts: {
      mono: "DM Mono, Menlo, monospace",
      body: "Rubik",
      heading: "Inter",
    },
    colors: {
      dark: {
        heaading: "#1d3557",
      },
    },
    styles: {
      global: props => ({
        body: {
          bg: mode("white", "blue.800")(props),
        },
      }),
    },
    components: {
      Heading: {
        baseStyle: {
          letterSpacing: "-1px",
        },
        variants: {
          main: ({ colorMode }) => ({
            color: colorMode === "dark" ? "gray.50" : "#1d3557",
          }),
        },
      },
      Text: {
        baseStyle: {
          color: "gray.500",
        },
        variants: {
          subtle: ({ colorMode }) => {
            return {
              color: colorMode === "dark" ? "gray.400" : "gray.500",
            }
          },
        },
      },
      Button: {
        variants: {
          subtle: ({ colorMode }) => {
            return {
              color: colorMode === "dark" ? "gray.400" : "gray.500",
              fontWeight: 400,
              fontSize: "sm",
              _hover: { bg: colorMode === "dark" ? "gray.800" : "gray.100" },
            }
          },
        },
      },
    },
  })
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>{element}</Layout>
      </ChakraProvider>
    </Provider>
  )
}
