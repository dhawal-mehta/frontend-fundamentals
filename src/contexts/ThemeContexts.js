import React from 'react';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export const ModeContext = React.createContext({mode: "dark"});

export default ColorModeContext;