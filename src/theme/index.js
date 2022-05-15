// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// export default function ToggleColorMode() {
//     const [mode, setMode] = React.useState('light');
//     const colorMode = React.useMemo(
//       () => ({
//         toggleColorMode: () => {
//           setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//         },
//       }),
//       [],
//     );
  
//     const theme = React.useMemo(
//       () =>
//         createTheme({
//           palette: {
//             mode,
//           },
//         }),
//       [mode],
//     );
  
//   }

const baseTheme = {
    // typography: {
    //     button: {
    //       fontWeight: 600,
    //     },
    // }
}


const lightTheme = {
    palette: {
        mode: 'light',
        background: "#F9FAFC",
        primary: {
            main: "#c3c3c3"
        }
    }
}

const darkTheme = {
    palette: {
        mode: 'dark',
        background: "#0B0F19",
        primary: { 
            main: "#fff"
        }
    }

}

export const  getDesignTokens = (mode) => (
    {
    
    ...baseTheme,
    ...(mode === 'light'
        ? lightTheme
        : darkTheme
    )
}
);

  

// export function CreateAppTheme(config){
//     const modeContextValue = React.useContext(ModeContext)
    
//     const mode = modeContextValue.mode
//     // const mode = config.mode
//     console.log("value of config", config, mode)
    


//     console.log("theme", theme)

//     return theme
// }