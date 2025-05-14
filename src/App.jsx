import React from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import AppLayout from './layout/AppLayout'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "*",
          element: <NotFound />,
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} >

      </RouterProvider>
    </>
  )
}

export default App