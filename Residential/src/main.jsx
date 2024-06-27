import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Achievements from './components/Achievements/Achievements.jsx'
import Projects from './components/Projects/Projects.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Contact from './components/Contact/Contact.jsx'
import Admin from './components/Admin/Admin.jsx'
import Advisor from './components/Advisor/Advisor.jsx'
import About from './components/About/About.jsx'



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
        path: 'Achievements',
        element: <Achievements />,
      },
      {
        path: 'Projects',
        element: <Projects />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Gallery',
        element: <Gallery />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Admin',
        element: <Admin />,
      },
      {
        path: 'Advisor',
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
