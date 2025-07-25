import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import App from './App.jsx'
import './global.css';
import './layout.css'

createRoot(document.getElementById('root')).render(
//me habilita a usar la herramienta de react-router
<BrowserRouter>
  <App/>
</BrowserRouter>
)
