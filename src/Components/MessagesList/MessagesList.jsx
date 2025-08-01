import React from "react";
import Message from "../Message/Message";
import './MessagesList.css';

const MessagesList = ({ messages, deleteMessageById }) => {
  return (
    <div className="contenedor-mensajes">
      {messages.length === 0 ? (
        <span className="sin-mensajes">Aún no tienes mensajes</span>
      ) : (
        messages.map((message) => (
          <Message
            key={message.id}
            emisor={message.emisor}
            hora={message.hora}
            id={message.id}
            texto={message.texto}
            status={message.status}
            deleteMessageById={deleteMessageById}
          />
        ))
      )}
    </div>
  );
};

export default MessagesList;
