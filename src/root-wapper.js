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
      primary: "#d7819b",
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
              lineHeight: "initial",
              _hover: { bg: colorMode === "dark" ? "gray.800" : "gray.100" },
            }
          },
          main: ({ colorMode }) => {
            return {
              bg: "gray.500",
              fontWeight: "500",
              color: "white",
              w: "full",
              p: "7",
              fontSize: "md",
              lineHeight: "initial",
              transition: "all 0.4s ease",
              _hover: { bg: colorMode === "dark" ? "#d7819b" : "gray.600" },
              _focus: {
                bg: colorMode === "dark" ? "#d7819b" : "gray.700",
                shadow: "xl",
                outline: "none",
              },
              _active: {
                transform: "scale(0.95)",
                bg: colorMode === "dark" ? "#d7819b" : "gray.500",
              },
            }
          },

          heavy: ({ colorMode }) => {
            return {
              bg: "transparent",
              color: colorMode === "dark" ? "gray.400" : "gray.500",
              fontWeight: 500,
              fontSize: "sm",
              borderWidth: "1px",
              borderColor: "transparent",
              rounded: "md",
              textTransform: "uppercase",
              lineHeight: "initial",
              _hover: {
                bg: colorMode === "dark" ? "gray.700" : "gray.600",
                color: "#fff",
                textDecoration: "none !important",
                borderColor: colorMode === "dark" ? "gray.600" : "gray.600",
                shadow: "xl",
              },
              _focus: { boxShadow: "none" },
            }
          },
          silent: ({ colorMode }) => {
            return {
              fontWeight: "normal",
              fontSize: "sm",
              color: colorMode === "dark" ? "gray.400" : "gray.500",
              outline: "none",
              lineHeight: "initial",
              _hover: {
                color: colorMode === "dark" ? "gray.200" : "gray.700",
                textDecoration: "none",
              },
              _focus: {
                outline: "none",
                boxShadow: "none",
                color: colorMode === "dark" ? "gray.200" : "gray.700",
              },
            }
          },
        },
      },
      Tooltip: {
        variants: {
          default: () => {
            return {
              color: "gray.50",
              bg: "gray.500",
              fontWeight: "400",
              fontSize: "sm",
              rounded: "sm",
              px: "3",
              py: "1",
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
