import React from 'react'
import Home from '../src/Pages/home/Home'
import About from '../src/Pages/about/About'
import Profile from '../src/Pages/profile/Profile'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/login/Login'
import CadastroUsuario from './Pages/cadastroUsuario/CadastroUsuario'
import './App.css'
import ListaTema from './components/temas/listatema/ListaTema'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'
import CadastroPost from './components/postagens/cadastroPost/CadastroPost'
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem'
import DeletarTema from './components/temas/deletarTema/DeletarTema'


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>

          <Route path="/" element={<Login />} />
          
          <Route path='/login' element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />

          <Route path='/profile' element={<Profile />} />

          <Route path='/about' element={<About />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          
          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />

        </Routes>
      </div>

      <Footer />
    </Router>

  );
}export default App
