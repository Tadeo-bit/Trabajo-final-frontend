import React from "react";
import Message from "../Message/Message";
import './MessagesList.css';
import { useRef } from "react"
import { useEffect } from "react"

const MessagesList = ({ messages, deleteMessageById }) => {

  const contenedorRef = useRef(null)

  useEffect(() => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollTop = contenedorRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="contenedor-mensajes" ref={contenedorRef}>
      {messages.length === 0 ? (
        <span className="sin-mensajes">Aún no tienes mensajes</span>
      ) : (
        messages.map((message) => {
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
      )}
    </div>
  )
};

export default MessagesList;
