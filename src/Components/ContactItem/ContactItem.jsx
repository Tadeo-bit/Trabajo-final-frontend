import React from 'react';
import { Link } from 'react-router-dom';
import './ContactItem.css'; 

const ContactItem = ({ contact, moveContactToTop }) => {

    const lastMessage = contact.messages?.[contact.messages.length - 1]
    console.log(contact);

    return (
    <Link 
        to={`/contact/${contact.id}`} 
        className="contacto-enlace" 
        onClick={() => moveContactToTop(contact.id)} 
    >
    <div className="contacto-item">

      <div className="contacto-left">     
        <img
          className="contacto-avatar"
          src={contact.avatar}
          alt={contact.name}
        />

        <div className="contacto-info">
          <h2 className="contacto-nombre">{contact.name}</h2>

          <span className="contacto-mensaje">
            {lastMessage ? lastMessage.texto : ""}
          </span>
        </div>
      </div>

      <div className="contacto-right">
        <span className="contacto-hora">
          {lastMessage?.hora}
        </span>

        {contact.unread > 0 && (
          <span className="contacto-unread">
            {contact.unread}
          </span>
        )}
      </div>

    </div>
  </Link>
);
}

export default ContactItem;


