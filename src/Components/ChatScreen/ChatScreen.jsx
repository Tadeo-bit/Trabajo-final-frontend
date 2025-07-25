import React, { useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../Services/contactService'
import './ChatScreen.css' // 👈 Importar el CSS aquí

const ChatScreen = () => {
	const {contact_id} = useParams()
	const contact_selected = getContactById(contact_id)
	console.log('estoy en el contacto' + contact_id)

	const [messages, setMessages] = useState(contact_selected.mesagges)

	const deleteMessageById = (message_id) => {
		const new_message_list = []
		for(const message of messages){
			if(message.id !== message_id){
				new_message_list.push(message)
			}
		} 
		setMessages(new_message_list)
	}
	
	const addNewMessage = (text) => {
		const new_message = {
			emisor: 'Yo',
			hora: '11:10',
			texto: text,
			status: 'no-visto',
			id: messages.length + 1
		}
		const cloned_messages_list = [...messages]
		cloned_messages_list.push(new_message)
		setMessages(cloned_messages_list)
	}

	const deleteAllMesaages = () => {
		setMessages([])
	} 

	return (
		<div className="pantalla-chat">
			<div className="cabecera-chat">
				<h1>Mensajes</h1>
				{messages.length > 0 && (
					<button onClick={deleteAllMesaages} className="boton-borrar-todo">
						Borrar todos los mensajes
					</button>
				)}
			</div>

			<MessagesList messages={messages} deleteMessageById={deleteMessageById}/>
			
			<NewMessageForm addNewMessage={addNewMessage}/>
		</div>
	)
}

export default ChatScreen