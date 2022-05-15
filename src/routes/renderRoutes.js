import React , {Fragment } from "react";

import {
    Routes,
    Route
  } from "react-router-dom";

export const renderRoutes = (routes = [], parent={}) => (
      <>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;
        const path = route.path || ''
        return (
  
            <Route
              key={i}
              path={`${path}`}
              element={
              <Guard>
                <Layout>
                  <Component />
                </Layout>
              </Guard>
              }
            >
             
            { route.routes ? renderRoutes(route.routes) : <></> }
          
            </Route>
        );
      })}
    </>
);
export default renderRoutes;
