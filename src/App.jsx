import { HashRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import Inicio from './pages/Inicio/Inicio'
import Servicios from './pages/Servicios/Servicios'
import Contacto from './pages/Contacto/Contacto'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
