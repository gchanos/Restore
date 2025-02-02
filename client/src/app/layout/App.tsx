import { useState } from 'react';
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      background: {
        default: (paletteType === 'light') ? '#eaeaea' : '#121212'
      },
    mode: paletteType
    }
  })

  const toggleDarkMode = () => setDarkMode(prevState => !prevState);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Box
          sx={{
            minHeight: '100vh',
            background: darkMode 
              ?  'radial-gradient(circle, #1e3aBa, #111B27)' 
              :  'radial-gradient(circle, #baecf9, #f0f9ff)',
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
