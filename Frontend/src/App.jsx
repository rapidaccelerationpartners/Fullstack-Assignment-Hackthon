import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
