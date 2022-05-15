
import Invoices from '../components/Invoices'
import Expenses from '../components/Expenses'
import Invoice from '../components/Invoice'

// Layouts
import MainLayout from '../components/layouts/MainLayout'

// Guards
import HomeGuard from '../components/guards/HomeGuard'

const routes = [
  {
    path: "",
    component: Invoices,
    layout: MainLayout,
  },
  {
    path: "expenses",
    component: Expenses,
    layout: MainLayout,
    guard: HomeGuard
  },    
  {
    path: "Invoices",
    component: Invoices,
    layout: MainLayout,
    // layout: 
    routes: [
      {
        path: ":invoiceId",
        component: Invoice
      }
    ]
  }

]

export default routes;