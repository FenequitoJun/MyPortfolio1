import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/home.jsx'
import Proyectos from './pages/Projects.jsx'
import Sobremi from './pages/About.jsx'
import Contacto from './pages/Contact.jsx'


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/sobre-mi" element={<Sobremi />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}
