import './ServiceCard.css'

function ServiceCard({ titulo, descripcion }) {
  return (
    <article className="service-card">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </article>
  )
}

export default ServiceCard
