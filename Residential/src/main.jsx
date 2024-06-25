import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Achievements from './components/Achievements/Achievements.jsx'
import Projects from './components/Projects/Projects.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Contact from './components/Contact/Contact.jsx'
import Admin from './components/Admin/Admin.jsx'
import Advisor from './components/Advisor/Advisor.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: '/',
        element: <Achievements />,
      },
      {
        path: '/',
        element: <Projects />,
      },
      {
        path: '/',
        element: <Gallery />,
      },
      {
        path: '/',
        element: <Contact />,
      },
      {
        path: '/',
        element: <Admin />,
      },
      {
        path: '/',
        element: <Advisor />,
      },

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
