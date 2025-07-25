import React from "react";
import { useParams } from "react-router-dom";
import ContactScreen from "../ContactScreen/ContactScreen";
import ChatScreen from "../ChatScreen/ChatScreen";

const Main = () => {
  const { contact_id } = useParams()

  return (
    <div className="main-layout">
      <div className="sidebar">
        <ContactScreen />
      </div>
      <div className="chat">
        {contact_id ? (
          <ChatScreen />
        ) : (
          <div style={{ padding: '1rem' }}>
            Seleccioná un contacto para empezar a chatear.
          </div>
        )}
      </div>
    </div>
  )
}

export default Main

