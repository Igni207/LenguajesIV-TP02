import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

const LARGO_MAXIMO_MENSAJE = 300

function validarNombre(valor) {
  if (!valor.trim()) {
    return 'El nombre y apellido es obligatorio.'
  }
  if (valor.trim().length < 3) {
    return 'El nombre y apellido debe tener al menos 3 caracteres.'
  }
  if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(valor)) {
    return 'El nombre y apellido solo puede contener letras y espacios.'
  }
  return ''
}

function validarCorreo(valor) {
  if (!valor.trim()) {
    return 'El correo electrónico es obligatorio.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
    return 'Ingresá un correo electrónico válido.'
  }
  return ''
}

function validarMensaje(valor) {
  if (!valor.trim()) {
    return 'El mensaje es obligatorio.'
  }
  if (valor.trim().length < 10) {
    return 'El mensaje debe tener al menos 10 caracteres.'
  }
  if (valor.length > LARGO_MAXIMO_MENSAJE) {
    return `El mensaje no puede superar los ${LARGO_MAXIMO_MENSAJE} caracteres.`
  }
  return ''
}

const validadores = {
  nombre: validarNombre,
  correo: validarCorreo,
  mensaje: validarMensaje,
}

const valoresIniciales = { nombre: '', correo: '', mensaje: '' }
const erroresIniciales = { nombre: '', correo: '', mensaje: '' }

function ContactForm() {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState(erroresIniciales)
  const [enviando, setEnviando] = useState(false)
  const [estadoEnvio, setEstadoEnvio] = useState(null)

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setValores((anteriores) => ({ ...anteriores, [name]: value }))
  }

  const manejarBlur = (evento) => {
    const { name, value } = evento.target
    setErrores((anteriores) => ({ ...anteriores, [name]: validadores[name](value) }))
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    const nuevosErrores = {
      nombre: validarNombre(valores.nombre),
      correo: validarCorreo(valores.correo),
      mensaje: validarMensaje(valores.mensaje),
    }
    setErrores(nuevosErrores)

    const hayErrores = Object.values(nuevosErrores).some((error) => error !== '')
    if (hayErrores) {
      return
    }

    setEnviando(true)
    setEstadoEnvio(null)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: valores.nombre,
          email: valores.correo,
          message: valores.mensaje,
          time: new Date().toLocaleString('es-AR'),
          title: 'Formulario de contacto',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setEstadoEnvio('exito')
        setValores(valoresIniciales)
        setErrores(erroresIniciales)
      })
      .catch(() => {
        setEstadoEnvio('error')
      })
      .finally(() => {
        setEnviando(false)
      })
  }

  return (
    <form className="contact-form" onSubmit={manejarEnvio} noValidate>
      <div className="campo">
        <label htmlFor="nombre">Nombre y Apellido</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={valores.nombre}
          onChange={manejarCambio}
          onBlur={manejarBlur}
        />
        {errores.nombre && <p className="mensaje-error">{errores.nombre}</p>}
      </div>

      <div className="campo">
        <label htmlFor="correo">Correo Electrónico</label>
        <input
          id="correo"
          name="correo"
          type="email"
          value={valores.correo}
          onChange={manejarCambio}
          onBlur={manejarBlur}
        />
        {errores.correo && <p className="mensaje-error">{errores.correo}</p>}
      </div>

      <div className="campo">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          maxLength={LARGO_MAXIMO_MENSAJE}
          value={valores.mensaje}
          onChange={manejarCambio}
          onBlur={manejarBlur}
        />
        <span className="contador-caracteres">
          {valores.mensaje.length}/{LARGO_MAXIMO_MENSAJE}
        </span>
        {errores.mensaje && <p className="mensaje-error">{errores.mensaje}</p>}
      </div>

      <button type="submit" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar'}
      </button>

      {estadoEnvio === 'exito' && <p className="mensaje-exito">Tu mensaje se envió correctamente.</p>}
      {estadoEnvio === 'error' && (
        <p className="mensaje-error">Hubo un error al enviar el mensaje. Intentá nuevamente.</p>
      )}
    </form>
  )
}

export default ContactForm
