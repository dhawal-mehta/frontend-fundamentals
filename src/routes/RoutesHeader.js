import React from 'react'
import Helmet from 'react-helmet'

const RoutesHeader = (props) => {
  return (
  <>
    <Helmet titleTemplate="%s | test app " defaultTitle="test app ">
      <meta charSet="utf-8" />
      {/* <meta name="description" content="test app" /> */}
    </Helmet>
    {props.children}
  </>
  )
}

export default RoutesHeader