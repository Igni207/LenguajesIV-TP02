import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar-title">Mi Sitio</h1>
      <nav>
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end className={({ isActive: activo }) => (activo ? 'activo' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" className={({ isActive: activo }) => (activo ? 'activo' : '')}>
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive: activo }) => (activo ? 'activo' : '')}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
