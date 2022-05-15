import React from 'react'

import Header from '../utils/Header'

const MainLayout = ({children}) => {

  return (
    <>
        <Header />
        { children }
    </>
  )
}

export default MainLayout