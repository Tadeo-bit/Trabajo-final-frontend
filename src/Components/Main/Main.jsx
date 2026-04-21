import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactScreen from '../ContactScreen/ContactScreen';
import ChatScreen from '../ChatScreen/ChatScreen';
import { getContactList } from '../../Services/contactService'
import './Main.css';
import "../../layout.css"
import { moveContactToTop as moveContactToTopService, resetUnread } from '../../Services/contactService'

const Main = () => {
  const { contact_id } = useParams();
  const [esMobile, setEsMobile] = useState(window.innerWidth <= 480);

  const STORAGE_VERSION = "v2";

  const savedVersion = localStorage.getItem("version");

  if (savedVersion !== STORAGE_VERSION) {
  localStorage.removeItem("contacts");
  localStorage.setItem("version", STORAGE_VERSION);
  }
  
  const data = localStorage.getItem("contacts")

  const initialContacts = data
  ? JSON.parse(data).map(contact => ({
      ...contact,
      unread: contact.unread ?? 0
    }))
  : getContactList()

  const [contacts, setContacts] = useState(initialContacts)

  useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts))
   }, [contacts])

  useEffect(() => {
    const manejarResize = () => {
      setEsMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', manejarResize);
    return () => window.removeEventListener('resize', manejarResize);
  }, []);

  const mostrarChat = contact_id || !esMobile;

  const moveContactToTop = (contact_id) => {
  setContacts(prev =>
    moveContactToTopService(
      resetUnread(prev, contact_id),
      contact_id
      )
    )
  }

  return (
<div className="main-layout">

  {/* SIDEBAR */}
  <div className={`sidebar ${contact_id ? 'sidebar-oculto' : ''}`}>
    <ContactScreen 
      contacts={contacts}
      moveContactToTop={moveContactToTop}
    />
  </div>

  {/* CHAT CONVERSACIÓN */}
  {mostrarChat && contact_id && (
    <div className="chat">
      <ChatScreen 
        contacts={contacts} 
        setContacts={setContacts}
      />
    </div>
  )}

  {/* PANTALLA DE INICIO */}
  {mostrarChat && !contact_id && (
    <div className="chat pantalla-inicio">
      
      <div className="contenedor-inicio">

        {/* CARD SUPERIOR */}
        <div className="card-inicio">
          <img
            src="/Images/whatsapp-escritorio.jpg"
            alt="WhatsApp Desktop"
            className="imagen-inicio"
          />

          <h1 className="titulo-inicio">
            Descarga WhatsApp para Windows
          </h1>

          <p className="descripcion-inicio">
            Obtén funciones adicionales, como llamadas y videollamadas,
            compartir pantalla y más.
          </p>

          <button className="boton-descarga">
            Descargar
          </button>
        </div>

        {/* ACCIONES */}
        <div className="acciones-inicio">

          <div className="accion-item">
            <div className="accion">
              <i className="bi bi-file-earmark"></i>
            </div>
            <span className="accion-texto">Enviar documento</span>
          </div>

          <div className="accion-item">
            <div className="accion">
              <i className="bi bi-person-plus"></i>
            </div>
            <span className="accion-texto">Añadir contacto</span>
          </div>

        </div>

      </div>

    </div>
  )}

</div>
  );
};

export default Main;

