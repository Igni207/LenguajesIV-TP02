import './Mapa.css'

function Mapa() {
  return (
    <div className="mapa-contenedor">
      <iframe
        title="Ubicacion en el mapa"
        className="mapa-iframe"
        src="https://maps.google.com/maps?q=Salta%2C%20Argentina&z=13&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default Mapa
