import React from 'react'

const Message = ({emisor, hora, id, texto, status, deleteMessageById}) => {
	return (
		<div>
			<p>{texto}</p>
			<span>{hora}</span>
			<button onClick={() => deleteMessageById(id)}>Eliminar</button>
		</div>
	)
}
export default Message