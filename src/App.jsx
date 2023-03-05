import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Orders from './components/Orders'
import List from './components/List'

function App() {



  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/orders" element={<Orders/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
