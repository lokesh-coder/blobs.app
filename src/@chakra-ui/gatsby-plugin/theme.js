import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  colors: {
    primary: '#d7819b',
    dark: {
      heaading: '#1d3557',
    },
  },
  styles: {
    global: ({ colorMode }) => ({
      body: {
        bg: colorMode === 'dark' ? 'blue.800' : 'white',
      },
      '#blobSvg': {
        overflow: 'visible',
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        letterSpacing: '-1px',
      },
      variants: {
        main: ({ colorMode }) => ({
          fontWeight: '900',
          color: colorMode === 'dark' ? 'gray.300' : '#1d3557',
        }),
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.500',
      },
      variants: {
        subtle: ({ colorMode }) => ({
          color: colorMode === 'dark' ? 'gray.300' : 'gray.700',
        }),
      },
    },
    Button: {
      variants: {
        subtle: ({ colorMode }) => ({
          color: colorMode === 'dark' ? 'gray.400' : 'gray.500',
          fontWeight: 400,
          fontSize: 'sm',
          lineHeight: 'initial',
          _hover: { bg: colorMode === 'dark' ? 'gray.800' : 'gray.100' },
        }),
        main: ({ colorMode }) => ({
          bg: 'gray.500',
          fontWeight: '600',
          color: 'white',
          w: 'full',
          p: '7',
          fontSize: 'md',
          lineHeight: 'initial',
          transition: 'all 0.4s ease',
          _hover: { bg: colorMode === 'dark' ? '#d7819b' : 'gray.600' },
          _focus: {
            bg: colorMode === 'dark' ? '#d7819b' : 'gray.700',
            shadow: 'xl',
            outline: 'none',
          },
          _active: {
            transform: 'scale(0.95)',
            bg: colorMode === 'dark' ? '#d7819b' : 'gray.500',
          },
        }),

        heavy: ({ colorMode }) => ({
          bg: 'transparent',
          color: colorMode === 'dark' ? 'gray.400' : 'gray.500',
          fontWeight: 700,
          fontSize: '13px',
          borderWidth: '1px',
          borderColor: 'transparent',
          rounded: 'md',
          textTransform: 'uppercase',
          lineHeight: 'initial',
          _hover: {
            bg: colorMode === 'dark' ? 'gray.700' : 'gray.600',
            color: '#fff',
            textDecoration: 'none !important',
            borderColor: colorMode === 'dark' ? 'gray.600' : 'gray.600',
            shadow: 'xl',
          },
          _focus: { boxShadow: 'none' },
        }),
        silent: ({ colorMode }) => ({
          fontWeight: 'normal',
          fontSize: 'sm',
          color: colorMode === 'dark' ? 'gray.400' : 'gray.500',
          outline: 'none',
          lineHeight: 'initial',
          _hover: {
            color: colorMode === 'dark' ? 'gray.200' : 'gray.700',
            textDecoration: 'none',
          },
          _focus: {
            outline: 'none',
            boxShadow: 'none',
            color: colorMode === 'dark' ? 'gray.200' : 'gray.700',
          },
        }),
      },
    },
    Tooltip: {
      variants: {
        default: () => ({
          color: 'gray.50',
          bg: 'gray.500',
          fontWeight: '400',
          fontSize: 'sm',
          rounded: 'sm',
          px: '3',
          py: '1',
        }),
      },
    },
  },
});
export default extendTheme(theme);
