import React from 'react'

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitMessageForm = (event) => {
		event.preventDefault() 
		let new_message_text = event.target.message.value //accedo al valor del mensaje enviado a través del  input y puedo acceder al mensaje porque el input tiene un atributo name='message'
		addNewMessage(new_message_text)
		event.target.message.value = '' //esto para que se resetee el campo 
	}
  return (
    <div>
        <form onSubmit={handleSubmitMessageForm}>
				<div> 
					<label htmlFor= 'message'>Escribe un mensaje:</label>
					<input type="text" placeholder='Escribe un mensaje...' id= 'message' name='message' />
				</div>
				<button type='submit'>Enviar mensaje</button>
		</form>
    </div>
  )
}

export default NewMessageForm