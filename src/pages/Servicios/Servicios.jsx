import ServiceCard from '../../components/ServiceCard/ServiceCard'
import './Servicios.css'

const servicios = [
  {
    titulo: 'React',
    descripcion: 'Librería para construir interfaces de usuario basadas en componentes.',
    imagen: 'https://cdn.simpleicons.org/react/61DAFB',
  },
  {
    titulo: 'JavaScript',
    descripcion: 'Lenguaje de programación principal para el desarrollo web del lado del cliente.',
    imagen: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  },
  {
    titulo: 'HTML5',
    descripcion: 'Lenguaje de marcado utilizado para estructurar el contenido de las páginas web.',
    imagen: 'https://cdn.simpleicons.org/html5/E34F26',
  },
  {
    titulo: 'CSS3',
    descripcion: 'Lenguaje de estilos utilizado para darle diseño y maquetación a los sitios web.',
    imagen: 'https://cdn.simpleicons.org/css3/1572B6',
  },
  {
    titulo: 'Git',
    descripcion: 'Sistema de control de versiones utilizado para gestionar el código fuente.',
    imagen: 'https://cdn.simpleicons.org/git/F05032',
  },
  {
    titulo: 'Vite',
    descripcion: 'Herramienta de construcción utilizada para desarrollar y compilar el sitio.',
    imagen: 'https://cdn.simpleicons.org/vite/646CFF',
  },
]

function Servicios() {
  return (
    <section className="servicios">
      <h2>Servicios</h2>
      <div className="servicios-grid">
        {servicios.map((servicio) => (
          <ServiceCard
            key={servicio.titulo}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
            imagen={servicio.imagen}
          />
        ))}
      </div>
    </section>
  )
}

export default Servicios
