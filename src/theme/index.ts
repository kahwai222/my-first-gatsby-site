import React from 'react';
import { ComponentsOverrides, createTheme, Theme, responsiveFontSizes } from '@mui/material';

import shadows from './shadows';
import { light, dark } from './palette';

const getTheme = (mode: string, themeToggler: () => void): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: 'Roboto',
        button: {
          textTransform: 'none',
          fontWeight: 'medium' as React.CSSProperties['fontWeight'],
        },
        h1: {
          fontFamily: 'acumin-pro-condensed, sans-serif',
          fontSize: '2rem',
          fontWeight: 800,
        },
        h2: {
          fontFamily: "'Roboto', sans-serif",
          fontSize: '0.85rem',
          fontWeight: 500,
          // color: (mode === 'light' ? light : dark).text.primary,
          color: '#26245D',
        },
        h3: {
          fontFamily: 'Roboto',
          fontSize: '0.75rem',
          fontWeight: 500,
          // color: (mode === 'light' ? light : dark).text.primary,
          color: '#26245D',
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 400,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          } as ComponentsOverrides['MuiButton'],
        },
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true,
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          } as ComponentsOverrides['MuiInputBase'],
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          } as ComponentsOverrides['MuiOutlinedInput'],
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          } as ComponentsOverrides['MuiCard'],
        },
      },
      themeToggler,
    }),
  );

export default getTheme;
