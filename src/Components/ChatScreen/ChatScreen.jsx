import React, { useState, useEffect } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import './ChatScreen.css' 
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { deleteMessageById as deleteMessageByIdService } from '../../Services/contactService'
import { addNewMessage as addNewMessageService } from '../../Services/contactService'

const ChatScreen = ({ contacts, setContacts }) => {
	const navigate = useNavigate()
	const {contact_id} = useParams()
	const contact_selected = contacts.find(
    c => Number(c.id) === Number(contact_id)
    )
	console.log('estoy en el contacto' + contact_id)
  
  const messages = contact_selected?.messages || []  
	
  const [drafts, setDrafts] = useState({})



	const deleteMessageById = (message_id) => {
  setContacts(prev =>
    deleteMessageByIdService(prev, contact_id, message_id)
  )
  }
	
	const addNewMessage = (text) => {
  const new_message = {
    emisor: 'Yo',
    hora: '11:10',
    texto: text,
    status: 'no-visto',
    id: Date.now()
  }

  setContacts(prev =>
  addNewMessageService(prev, contact_id, new_message)
  )

  setDrafts(prev => ({
    ...prev,
    [contact_id]: ''
  }))
  }

	const deleteAllMesaages = () => {
		setMessages([])
	} 

	const handleDraftChange = (text) => {
  setDrafts(prev => ({
    ...prev,
    [contact_id]: text
  }))
}

	return (
  <div className="pantalla-chat">
    <div className="encabezado-chat">
      {/* Botón de regreso (solo visible en mobile) */}
      <button className="boton-volver-movil" onClick={() => navigate('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#54656f" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L3.707 7.5H14.5a.5.5 0 0 1 .5.5z"/>
        </svg>
      </button>

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

    <NewMessageForm
  	addNewMessage={addNewMessage}
    draftValue={drafts[contact_id] || ''}
    onDraftChange={handleDraftChange}
    />
  </div>
)
}

export default ChatScreen