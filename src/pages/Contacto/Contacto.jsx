import ContactForm from '../../components/ContactForm/ContactForm'
import Mapa from '../../components/Mapa/Mapa'
import './Contacto.css'

function Contacto() {
  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <div className="contacto-contenido">
        <div className="contacto-columna">
          <ul className="contacto-info">
            <li>Email: contacto@misitio.com</li>
            <li>Teléfono: +54 387 000-0000</li>
            <li>Ubicación: Salta, Argentina</li>
          </ul>
          <ContactForm />
        </div>
        <div className="contacto-columna">
          <Mapa />
        </div>
      </div>
    </section>
  )
}

export default Contacto
