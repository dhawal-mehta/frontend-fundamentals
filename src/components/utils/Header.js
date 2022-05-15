import React from 'react'
import {
    Link
  } from "react-router-dom";

//MUI
import {Box, IconButton} from '@mui/material'

//MUI icons
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import {ColorModeContext, ModeContext} from '../../contexts/ThemeContexts';

const Header = () => {
  const themeContext = React.useContext(ColorModeContext)
  const modeContext = React.useContext(ModeContext)

  // console.log(themeContext.mode, "from themeContext")
  // const theme = CreateAppTheme()

  return (
    <Box 
      sx={{
        // display: 'flex',
        // width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        bgcolor: 'background',
        color: 'primary.main',
        // borderRadius: 1,
        // p: 3,
      }}
    >
        <h1>Bookkeeper!</h1>
        <nav
        style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
        }}
        >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
        <IconButton sx={{ ml: 1 }} onClick={themeContext.toggleColorMode} color="inherit">
          {modeContext.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>

        </nav>
    </Box>
  )
}

export default Header