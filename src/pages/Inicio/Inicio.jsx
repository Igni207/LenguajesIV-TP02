import { useEffect, useState } from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import './Inicio.css'

const CANTIDAD_POKEMON = 12

function Inicio() {
  const [pokemones, setPokemones] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelado = false

    async function cargarPokemones() {
      setCargando(true)
      setError('')

      try {
        const pedidos = []
        for (let id = 1; id <= CANTIDAD_POKEMON; id += 1) {
          pedidos.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((respuesta) => {
              if (!respuesta.ok) {
                throw new Error('No se pudo obtener la informacion del pokemon')
              }
              return respuesta.json()
            }),
          )
        }

        const resultados = await Promise.all(pedidos)

        if (!cancelado) {
          setPokemones(
            resultados.map((pokemon) => ({
              id: pokemon.id,
              nombre: pokemon.name,
              imagen: pokemon.sprites.other['official-artwork'].front_default,
              tipos: pokemon.types.map((tipo) => tipo.type.name),
              altura: pokemon.height / 10,
              peso: pokemon.weight / 10,
            })),
          )
        }
      } catch {
        if (!cancelado) {
          setError('No se pudieron cargar los datos desde la API. Intentá recargar la página.')
        }
      } finally {
        if (!cancelado) {
          setCargando(false)
        }
      }
    }

    cargarPokemones()

    return () => {
      cancelado = true
    }
  }, [])

  return (
    <section className="inicio">
      <h2>Inicio</h2>
      <p>Estos son algunos de los Pokémon obtenidos desde la PokeAPI.</p>

      {cargando && <p>Cargando pokémon...</p>}
      {error && <p className="inicio-error">{error}</p>}

      {!cargando && !error && (
        <div className="pokemon-grid">
          {pokemones.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              nombre={pokemon.nombre}
              imagen={pokemon.imagen}
              tipos={pokemon.tipos}
              altura={pokemon.altura}
              peso={pokemon.peso}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Inicio
