import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router = (
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
