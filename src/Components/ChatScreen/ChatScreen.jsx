import React, { useState, useEffect } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../Services/contactService'
import './ChatScreen.css' 
import { Link } from 'react-router-dom'

const ChatScreen = () => {
	const {contact_id} = useParams()
	const contact_selected = getContactById(contact_id)
	console.log('estoy en el contacto' + contact_id)

	const [messages, setMessages] = useState([])

	useEffect (()=>{
		setMessages (contact_selected.mesagges)
	},
		[contact_id]
	)

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
    <div className="encabezado-chat">
      <div className="info-contacto">
        <img
          src={`/Images/avatar_${contact_id}.jpg`}
          alt={contact_selected.name}
          className="avatar-contacto"
        />
        <span className="nombre-contacto">{contact_selected.name}</span>
      </div>

      <div className="acciones-chat">
        <i className="bi bi-camera-video-fill icono-chat"></i>
        <i className="bi bi-search icono-chat"></i>
        <i className="bi bi-three-dots-vertical icono-chat"></i>
      </div>
    </div>

    <MessagesList
      messages={messages}
      deleteMessageById={deleteMessageById}
    />

    <NewMessageForm addNewMessage={addNewMessage} />
  </div>
)
}

export default ChatScreen