import React from 'react'
import './NewMessageForm.css' 

const NewMessageForm = ({ addNewMessage }) => {
  const handleSubmitMessageForm = (event) => {
    event.preventDefault()
    let new_message_text = event.target.message.value
    addNewMessage(new_message_text)
    event.target.message.value = ''
  }

  return (
    <div className="formulario-nuevo-mensaje-contenedor">
      <form className="formulario-nuevo-mensaje" onSubmit={handleSubmitMessageForm}>
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          id="message"
          name="message"
          className="input-mensaje"
        />
        <button type="submit" className="boton-enviar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="white"
          >
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default NewMessageForm


