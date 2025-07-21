import React, { useState } from 'react'
import ChatScreen from './Components/ChatScreen/ChatScreen'
import { Route, Routes } from 'react-router'
import ContactScreen from './Components/ContactScreen/ContactScreen'

const App = () => {
	
	return (
		<div>
			<Routes>
				<Route
				path= '/'
				element= {<ContactScreen/>}
				/>
				<Route 
					path='/contact/:contact_id/messages' /*los dos puntos indican que el valor 
					que sigue va a ser variable, en este caso contact_id que puede 
					ser: contact/1/messages o contact/2/messages etc... ES UN PARAMETRO DE BUSQUEDA
					un valor que se pasa por la URl y que luego puedo obtener con useParams*/
					element= {<ChatScreen/>}
				/>
			</Routes>
		</div>
	)
}


export default App
