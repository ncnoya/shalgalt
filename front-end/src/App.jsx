import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
