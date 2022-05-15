import { render } from "react-dom";

import {
  BrowserRouter,
} from "react-router-dom";

// import App from "./App"
// import Invoices from './components/Invoices'
// import Expenses from './components/Expenses'
// import Invoice from './components/Invoice'

import App from './App'
// store
import store from './store'
import {Provider} from 'react-redux';

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
