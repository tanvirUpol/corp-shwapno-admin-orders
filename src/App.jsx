import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Orders from './components/Orders'


function App() {



  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Orders/>} />
        {/* <Route path="/orders" element={<Orders/>} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
