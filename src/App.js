
import React from 'react'

// import your route components too
import AppRoutes from './routes'

// themes
import { ThemeProvider } from '@mui/material/styles';

import { getDesignTokens } from './theme';
import {ColorModeContext, ModeContext} from './contexts/ThemeContexts';


import {  createTheme } from '@mui/material/styles';


import CounterPage from './components/pages/counter/CounterPage';

export default function App() {
  const [mode, setMode] = React.useState('dark');

  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    [],
  );

  const theme = React.useMemo(() => 
    createTheme(getDesignTokens(mode)),
  [mode])

  return (

    <ColorModeContext.Provider value={colorMode}>
      <ModeContext.Provider value={{mode}} >
      <ThemeProvider theme={theme}>
        <div>
          <AppRoutes />
        </div>
        <CounterPage />
      </ThemeProvider>
      </ModeContext.Provider>
    </ColorModeContext.Provider>
  );

}