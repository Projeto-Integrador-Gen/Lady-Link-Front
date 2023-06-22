import React from 'react'
import Home from '../src/Pages/home/Home'
import About from '../src/Pages/about/About'
import Profile from '../src/Pages/profile/Profile'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/login/Login'
import CadastroUsuario from './Pages/cadastroUsuario/CadastroUsuario'


import './App.css'


function App() {
   return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route  path="/" element ={<Login />} />
          <Route path='/login' element ={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario/>}/>
          <Route path='/profile' element ={<Profile />} /> 
          <Route path="/home" element={<Home />} />
          <Route path='/about' element ={<About />} />
        </Routes>
        </div>
      <Footer />
      
    </BrowserRouter>

   )
}

export default App
