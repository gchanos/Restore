import { createTheme, PaletteMode } from '@mui/material';
import {
  LIGHT_THEME,
  LIGHT_PRIMARY_MAIN,
  DARK_PRIMARY_MAIN,
  LIGHT_SECONDARY_MAIN,
  DARK_SECONDARY_MAIN,
  LIGHT_BACKGROUND_DEFAULT,
  DARK_BACKGROUND_DEFAULT,
  LIGHT_CARD_BG,
  DARK_CARD_BG,
  LIGHT_CARD_BORDER,
  DARK_CARD_BORDER,
  LIGHT_CARD_SHADOW,
  DARK_CARD_SHADOW,
  LIGHT_APPBAR_BG,
  DARK_APPBAR_BG,
  LIGHT_APPBAR_COLOR,
  DARK_APPBAR_COLOR,
  LIGHT_APPBAR_BORDER,
  DARK_APPBAR_BORDER
} from '../constants/theme-constants';

export const createAppTheme = (mode: PaletteMode) => {
  const isLight = mode === LIGHT_THEME;

  return createTheme({
    typography: {
      fontFamily: 'Inter, sans-serif'
    },
    palette: {
      mode,
      primary: {
        main: isLight ? LIGHT_PRIMARY_MAIN : DARK_PRIMARY_MAIN,
      },
      secondary: {
        main: isLight ? LIGHT_SECONDARY_MAIN : DARK_SECONDARY_MAIN,
      },
      background: {
        default: isLight ? LIGHT_BACKGROUND_DEFAULT : DARK_BACKGROUND_DEFAULT
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(12px)',
            backgroundColor: isLight ? LIGHT_CARD_BG : DARK_CARD_BG,
            border: `1px solid ${isLight ? LIGHT_CARD_BORDER : DARK_CARD_BORDER}`,
            boxShadow: isLight ? LIGHT_CARD_SHADOW : DARK_CARD_SHADOW,
            elevation: 0,
          }
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(12px)',
            backgroundColor: isLight ? LIGHT_APPBAR_BG : DARK_APPBAR_BG,
            color: isLight ? LIGHT_APPBAR_COLOR : DARK_APPBAR_COLOR,
            borderBottom: `1px solid ${isLight ? LIGHT_APPBAR_BORDER : DARK_APPBAR_BORDER}`,
            boxShadow: 'none',
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '8px',
          }
        }
      }
    }
  });
};
