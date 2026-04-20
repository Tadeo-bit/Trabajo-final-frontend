import React from 'react'
import './Message.css'

const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {
	const claseMensaje = emisor?.toUpperCase() === 'YO'
    ? 'mensaje mensaje-yo'
    : 'mensaje mensaje-contacto'

	return (
		<div className={claseMensaje}>
			<div className="contenido-mensaje">
				<p className="texto-mensaje">{texto}</p>
				<div className="info-mensaje">
					<span className="hora-mensaje">{hora}</span>
					<button className="boton-eliminar" onClick={() => deleteMessageById(id)}>🗑</button>
				</div>
			</div>
		</div>
	)
}

export default Message
