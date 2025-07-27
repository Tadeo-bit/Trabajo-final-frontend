import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';

const ContactList = ({ contacts }) => {
  return (
    <div className="contactos">
      {/* Encabezado */}
      <div className="encabezado-contactos">
        <div className="logo-whatsapp">WhatsApp</div>
        <div className="acciones-contactos">
          <i className="bi bi-chat-left"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>

      {/* Buscador */}
      <div className="buscador-contactos">
        <i className="bi bi-search lupa-icono"></i>
        <input
          type="text"
          placeholder="Buscar un chat o iniciar uno nuevo"
          className="campo-busqueda"
        />
      </div>

      {/* Filtros */}
      <div className="filtros-contactos">
        <button className="filtro activo">Todos</button>
        <button className="filtro">No leídos</button>
        <button className="filtro">Favoritos</button>
        <button className="filtro">Grupos</button>
      </div>

      {/* Lista de contactos */}
      <div className="lista-contactos">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;