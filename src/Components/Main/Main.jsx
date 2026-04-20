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
      <div className={`sidebar ${contact_id ? 'sidebar-oculto' : ''}`}>
        <ContactScreen 
        contacts={contacts}
        moveContactToTop={moveContactToTop}
        />
      </div>

      {mostrarChat && contact_id && (
        <div className="chat">
          <ChatScreen 
          contacts={contacts} setContacts={setContacts}
          />
        </div>
      )}

      {mostrarChat && !contact_id && (
        <div className="chat chat-oculto pantalla-inicio">
          <img
            src="/Images/whatsapp-inicio.jpg"
            alt="WhatsApp Logo"
            className="imagen-inicio"
          />
          <h1 className="titulo-inicio">Descarga WhatsApp para Windows</h1>
          <div className="descripcion-inicio">
            Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.
          </div>
          <button className="boton-descarga">Descargar</button>
          <div className="privacidad-inicio">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#54656f" viewBox="0 0 16 16">
              <path d="M8 1a4 4 0 0 0-4 4v3.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V5a4 4 0 0 0-4-4zM5 5a3 3 0 1 1 6 0v3H5V5z" />
              <path d="M2.5 8h11a.5.5 0 0 1 .5.5v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5v-5a.5.5 0 0 1 .5-.5z" />
            </svg>
            <span>Tus mensajes personales están cifrados de extremo a extremo.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;

