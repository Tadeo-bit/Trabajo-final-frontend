import React, { useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../Services/contactService'


const ChatScreen = () => {
	/* 
	useState: Crea estados
	parametro de useState: El valor de mi estado inicial
	messages: Variable que guarda el valor de mi estado
	setMessages: Funcion para actualizar el estado de mensajes

	REGLAS: 
	- Son inmutables, no podemos cambiarlos de valor ESTO NO SE PUEDE: messages.push('hola'), messages.splice(1, 1) (push, shift, unshift, pop y splice SON MUTABLES)
	*/

	/*pasos para ingresar a la mensajería del contacto:
	paso1: buscar obtener el contact_id de la url
	paso2: buscar el contact por su contact_id. Con ese contact.id vamos a llamar 
	al servicio getContactById y le vamos a pasar el contact q acabamos de obtener
	y él se va a encargar de ir a buscar a la lista de contactos
	paso3: caragr el contact.messages al estado de mensajes, 
	esto pasa una vez que lo encuetra, carga los mensajes
	*/
	//resolución Paso 1: 
	const {contact_id} = useParams()  /*useParams es una función que viene de react router y solo la llama. 
	Siempre devuelve un objeto por eso puedo desestructurarla, siempre el parametro de busqueda es un string  */
	//resolución Paso 2:
	const contact_selected = getContactById (contact_id)
	console.log('estoy en el contacto' + contact_id)
	//reolución Paso 3: vamos a nuestro estado de mensajes y por parametro que empieze de nuestro contacto selecionado con la lista de mensajes

    const [messages, setMessages] = useState(contact_selected.mesagges)


	const deleteMessageById = (message_id) => {
		/* Logica para actualizar el estado de mensajes eliminando el mensaje con el id recibido */
		//Creamos un array vacío para guardar los mensaje que queremos que se queden: 
		const new_message_list = []

		/* Recorrer la lista de mensajes (estado) y agregar a los mensajes que sean de id distinto al id recibido */
		//Pueden usar .filter() (INVESTIGAR)
		for(const message of messages){
			if(message.id !== message_id){
				new_message_list.push(message) //esto es válido porque new_mesages_list no es un estado es un array vacio
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
		//clono la lista de mensajes con spreed opetator para arrays 
		const cloned_messages_list = [...messages]
		//este push es válido porque no estamos mutando el estado 'messages' sino el clon de ese estado
		cloned_messages_list.push(new_message)
		setMessages(cloned_messages_list) 
		
	}

	const deleteAllMesaages = () => {
		setMessages ([])
	} 

	
	
	//si no quiero q el label se vea hay que ponerle visivility hiden 
    return (
        <div>
            <h1>Mensajes:</h1>
			{
				messages.length > 0
				&& //acá usa el and & que es un selector (condicional): si el primer valor es vardadero, selecciona el segundo. Si el primero es falso, selecciona el prmiero
			<button onClick={deleteAllMesaages}>Borrar todos los mensajes</button>
			} 
			<MessagesList messages={messages} deleteMessageById={deleteMessageById}/>
			<NewMessageForm addNewMessage={addNewMessage}/>
        </div>
    )
}

export default ChatScreen