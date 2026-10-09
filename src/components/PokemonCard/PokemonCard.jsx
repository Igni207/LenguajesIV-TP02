import './PokemonCard.css'

function PokemonCard({ nombre, imagen, tipos, altura, peso }) {
  return (
    <article className="pokemon-card">
      <img src={imagen} alt={nombre} className="pokemon-card-img" />
      <h3>{nombre}</h3>
      <ul className="pokemon-card-datos">
        <li>Tipo: {tipos.join(', ')}</li>
        <li>Altura: {altura} m</li>
        <li>Peso: {peso} kg</li>
      </ul>
    </article>
  )
}

export default PokemonCard
