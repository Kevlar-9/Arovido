import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'
import App from './App.jsx'
import Collection from './pages/Collection.jsx'
import About from './pages/About.jsx'
import Brands from './pages/Brands.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'collection', element: <Collection /> },
      { path: 'about', element: <About />},
      { path: 'brands', element: <Brands />},
      { path: 'contact', element: <Contact />},
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
