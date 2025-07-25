import React from 'react';
import { Link } from 'react-router-dom';
import './ContactItem.css'; 

const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}`} className="contacto-enlace">
            <div className="contacto-item">
                <img
                    className="contacto-avatar"
                    src={contact.avatar}
                    alt={contact.name}
                />
                <div className="contacto-info">
                    <h2 className="contacto-nombre">{contact.name}</h2>
                    <span className="contacto-estado">
                        Última conexión: {contact.last_connection}
                    </span>
                    <span className="contacto-estado">
                        Estado: {contact.connection_status}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default ContactItem;


