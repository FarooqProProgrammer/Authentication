import React from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import UserName from './components/UserName'
import PageNotFound from './components/PageNotFound'
import Password from './components/Password'
import Profile from './components/Profile'
import Reset from './components/Reset'
import Register from './components/Register'
import Recovery from './components/Recovery'

const router =  createBrowserRouter([
  {
    path:"/",
    element:<UserName></UserName>
  },{
    path:"/Register",
    element:<Register></Register>
  }
  ,{
    path:"/password",
    element:<Password></Password>
  }
  ,{
    path:"/profile",
    element:<Profile></Profile>
  }
  ,{
    path:"/recovery",
    element:<Recovery></Recovery>
  }
  ,{
    path:"/reset",
    element:<Reset></Reset>
  }
  ,{
    path:"*",
    element:<PageNotFound></PageNotFound>
  }
  
  
  
])
const App = () => {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  )
}

export default App