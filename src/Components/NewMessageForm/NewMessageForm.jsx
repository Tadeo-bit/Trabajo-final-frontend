import React from 'react'
import './NewMessageForm.css' 

const NewMessageForm = ({ addNewMessage, draftValue, onDraftChange }) => {

  const handleSubmitMessageForm = (event) => {
    event.preventDefault()

    addNewMessage(draftValue)

    onDraftChange('') // limpiar borrador
  }

  return (
    <div className="formulario-nuevo-mensaje-contenedor">
      <form className="formulario-nuevo-mensaje" onSubmit={handleSubmitMessageForm}>
        
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="input-mensaje"
          value={draftValue}
          onChange={(e) => onDraftChange(e.target.value)}
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

