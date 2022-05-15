import {
    Routes,
  } from "react-router-dom";


import RoutesHeader from './RoutesHeader'
import renderRoutes from "./renderRoutes";
import routes from "./routes";

export default function AppRoutes(){
    return (
    <RoutesHeader>
      {/* <Routes>
        <Route path="expenses" element={<Expenses />}> </Route>
        
        <Route path="invoices" element={<Invoices />}>
          <Route
              index
              element={
              <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
              </main>
              }
          />
          
          <Route path=":invoiceId" element={<Invoice />} />
          
        </Route> */}

      {/* </Routes> */}
     <Routes>
     { renderRoutes(routes) }
     </Routes>
    </RoutesHeader>
    )
}