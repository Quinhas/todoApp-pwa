import { extendTheme } from '@chakra-ui/react';
import { mediaQueries, scrollbar } from './custom';

const theme = extendTheme({
  styles: {
    global: () => ({
      '#root': {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      },
      html: {
        fontSize: '87.5%',
      },
      a: {
        transition: 'color 0.2s',
        color: 'complementary.500',
        _hover: {
          color: 'complementary.800',
        },
      },
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        background: 'blackAlpha.100',
        color: 'gray.800',
      },
      'body, input, button, select, textarea': {
        fontFamily: 'Montserrat, sans-serif',
      },
      ...mediaQueries,
      ...scrollbar,
    }),
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Fira Mono, monospace',
  },
  colors: {
    primaryApp: {
      50: '#ffe8fb',
      100: '#f4bfe7',
      200: '#e996d5',
      300: '#df6dc4',
      400: '#d543b3',
      500: '#bd2b9a',
      600: '#922078',
      700: '#691656',
      800: '#400b35',
      900: '#190114',
    },
    complementaryApp: {
      50: '#f1edfe',
      100: '#d3cbe9',
      200: '#b5a8d6',
      300: '#9785c5',
      400: '#7a63b4',
      500: '#60499a',
      600: '#4b3979',
      700: '#352957',
      800: '#201836',
      900: '#0c0717',
    },
    success: {
      50: '#EAFAEE',
      100: '#C5F1D0',
      200: '#A0E8B1',
      300: '#7BE093',
      400: '#56D774',
      500: '#31CE56',
      600: '#27A545',
      700: '#1D7C33',
      800: '#145222',
      900: '#0A2911',
    },
    warning: {
      50: '#FFF6E6',
      100: '#FEE7B9',
      200: '#FDD78B',
      300: '#FDC85E',
      400: '#FCB831',
      500: '#FCA903',
      600: '#C98703',
      700: '#976502',
      800: '#654301',
      900: '#322201',
    },
    danger: {
      50: '#FBE9EA',
      100: '#F4C2C3',
      200: '#EE9B9D',
      300: '#E77477',
      400: '#E04D51',
      500: '#D9262A',
      600: '#AE1E22',
      700: '#821719',
      800: '#570F11',
      900: '#2B0808',
    },

    google: {
      50: '#FDEAE8',
      100: '#F8C3BE',
      200: '#F49C95',
      300: '#F0756B',
      400: '#EB4F42',
      500: '#E72818',
      600: '#B92013',
      700: '#8B180E',
      800: '#5C100A',
      900: '#2E0805',
    },

    gray: {
      50: '#F1F2F4',
      100: '#D7DBDF',
      200: '#BEC4CB',
      300: '#A5ADB6',
      400: '#8B96A2',
      500: '#727F8D',
      600: '#5B6671',
      700: '#444C55',
      800: '#2D3339',
      900: '#17191C',
    },
  },
});

export default theme;
