import ServiceCard from '../../components/ServiceCard/ServiceCard'
import './Servicios.css'

const servicios = [
  {
    titulo: 'Desarrollo Web',
    descripcion: 'Creación de sitios y aplicaciones web a medida.',
  },
  {
    titulo: 'Diseño UI/UX',
    descripcion: 'Diseño de interfaces claras, accesibles y atractivas.',
  },
  {
    titulo: 'Consultoría',
    descripcion: 'Asesoramiento técnico para proyectos de software.',
  },
]

function Servicios() {
  return (
    <section className="servicios">
      <h2>Servicios</h2>
      <div className="servicios-grid">
        {servicios.map((servicio) => (
          <ServiceCard key={servicio.titulo} titulo={servicio.titulo} descripcion={servicio.descripcion} />
        ))}
      </div>
    </section>
  )
}

export default Servicios
