import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from './Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import { createAppTheme } from '../shared/theme/theme';
import { LIGHT_THEME, DARK_THEME, LIGHT_APP_BG, DARK_APP_BG } from '../shared/constants/theme-constants';

function App() {
  const { darkMode } = useAppSelector(state => state.ui)
  const paletteType = darkMode ? DARK_THEME : LIGHT_THEME;

  const theme = createAppTheme(paletteType);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollRestoration />
        <CssBaseline />
        <NavBar />
        <Box
          sx={{
            minHeight: '100vh',
            background: darkMode ? DARK_APP_BG : LIGHT_APP_BG,
            py: 6
          }}
        >
          <Container maxWidth='xl' sx={{
            mt: 8
          }}>
            <Outlet />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
