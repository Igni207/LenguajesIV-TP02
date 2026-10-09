import './ServiceCard.css'

function ServiceCard({ titulo, descripcion, imagen }) {
  return (
    <article className="service-card">
      <div className="service-card-img-wrapper">
        <img src={imagen} alt={titulo} className="service-card-img" />
      </div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </article>
  )
}

export default ServiceCard
