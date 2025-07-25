import React from "react"
import Message from "../Message/Message"
import './MessagesList.css' 

const MessagesList = ({ messages, deleteMessageById }) => {
	//ejemplo de renderiz condicional
	if (messages.length === 0){
		return <span className="sin-mensajes">Aún no tienes mensajes</span>
	}

	const lista_mensajes = messages.map(function (message) {
		return (
			<Message 
				key={message.id}
				emisor={message.emisor} 
				hora={message.hora} 
				id={message.id} 
				texto={message.texto} 
				status={message.status}
				deleteMessageById={deleteMessageById}
			/>
		)
	})

	return (
		<div className="contenedor-mensajes">
			{lista_mensajes}
		</div>
	)
}

export default MessagesList
