import React from 'react';
import { Link } from 'react-router';

const ContactItem = ({ contact }) => {
    return (
         <Link to={`/contact/${contact.id}/messages`}>
            <h2>{contact.name}</h2>
            <img src={contact.avatar} alt={contact.name} width={100} />
            <span>Last Connection: {contact.last_connection}</span>
            <span>Connection Status: {contact.connection_status}</span>
        </Link>
    );
}; 

export default ContactItem;


