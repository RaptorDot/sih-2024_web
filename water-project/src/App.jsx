import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)
const router = (
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>

    </Route>
  )
)
  return (
<>
    <RouterProvider router={router}/>
    
</>
  )
}

export default App
