const contacts = [
  {
    id : 1,
    name: 'Pedro',
    description: 'solo se vive una vez',
    avatar: '/Images/avatar_1.jpg',
    last_connection: '15:53',
    connection_status: 'ofline',
    mesagges: [
  {
		emisor: 'YO',
		hora: '23:10',
		id: 1,
		texto: 'Hola',
		status: 'visto'
	},
	{
		emisor: 'OTRO',
		hora: '23:11',
		id: 2,
		texto: 'Hola que tal?',
		status: 'visto'
	},
	{
		emisor: 'YO',
		hora: '23:12',
		id: 3,
		texto: 'Todo esta bien?',
		status: 'visto'
	},
	{
		emisor: 'OTRO',
		hora: '23:14',
		id: 4,
		texto: 'Sí, más vale',
		status: 'visto'
	}
    ]
  },
  {
    id : 2,
    name: 'Juan',
    description: 'el que abandona no tiene premio',
    avatar: '/Images/avatar_2.jpg',
    last_connection: '15:55',
    connection_status: 'online',
    mesagges: [
  {
		emisor: 'YO',
		hora: '21:03',
		id: 1,
		texto: '¿Estás en casa?',
		status: 'visto'
	},
	{
		emisor: 'OTRO',
		hora: '21:04',
		id: 2,
		texto: 'Sí, recién llego',
		status: 'visto'
	},
	{
		emisor: 'YO',
		hora: '21:05',
		id: 3,
		texto: 'Tengo tus llaves, ¿te las alcanzo?',
		status: 'visto'
	},
	{
		emisor: 'OTRO',
		hora: '21:06',
		id: 4,
		texto: 'Uy, gracias. ¿Podés venir tipo 9:30?',
		status: 'visto'
	},
	{
		emisor: 'YO',
		hora: '21:07',
		id: 5,
		texto: 'Dale, te aviso cuando salga',
		status: 'visto'
	}
    ]
  },
   {
    id: 3,
    name: 'Lucía',
    description: 'Frontend lover 💻',
    avatar: '/Images/avatar_3.jpg',
    last_connection: '12:45',
    connection_status: 'online',
    mesagges: [
      { emisor: 'YO', hora: '09:01', id: 1, texto: 'Buen día! ¿Cómo vas con el proyecto?', status: 'visto' },
      { emisor: 'OTRO', hora: '09:03', id: 2, texto: 'Buen día! Ayer avancé con los estilos del login', status: 'visto' },
      { emisor: 'YO', hora: '09:05', id: 3, texto: '¿Usaste Tailwind al final?', status: 'visto' },
      { emisor: 'OTRO', hora: '09:06', id: 4, texto: 'Sí, me costó un poco pero quedó prolijo', status: 'visto' },
      { emisor: 'YO', hora: '09:07', id: 5, texto: 'Qué bien! Después pasame el repo así lo veo', status: 'visto' },
      { emisor: 'OTRO', hora: '09:08', id: 6, texto: 'Dale! Y te paso también el login con validación', status: 'visto' },
      { emisor: 'YO', hora: '09:09', id: 7, texto: 'Perfecto, eso me re sirve', status: 'visto' },
      { emisor: 'OTRO', hora: '09:10', id: 8, texto: '¿Cómo venís vos con el chat?', status: 'visto' },
      { emisor: 'YO', hora: '09:12', id: 9, texto: 'Lo tengo andando, pero sin contexto aún', status: 'visto' },
      { emisor: 'OTRO', hora: '09:13', id: 10, texto: '¡Vamos! Lo importante es que funcione 😅', status: 'visto' }
    ]
  },
  {
    id: 4,
    name: 'Pedro',
    description: 'Un día a la vez',
    avatar: '/Images/avatar_4.jpg',
    last_connection: '10:22',
    connection_status: 'ofline',
    mesagges: [
      { emisor: 'YO', hora: '18:30', id: 1, texto: '¿Probaste la API de clima que te pasé?', status: 'visto' },
      { emisor: 'OTRO', hora: '18:32', id: 2, texto: 'Sí! Es bastante clara, me gustó', status: 'visto' },
      { emisor: 'YO', hora: '18:33', id: 3, texto: '¿La integraste con algún componente?', status: 'visto' },
      { emisor: 'OTRO', hora: '18:35', id: 4, texto: 'Con uno funcional, me costó usar useEffect', status: 'visto' },
      { emisor: 'YO', hora: '18:36', id: 5, texto: 'A mí también me confunde a veces', status: 'visto' },
      { emisor: 'OTRO', hora: '18:37', id: 6, texto: 'Pero ya muestra el clima de Córdoba 😄', status: 'visto' },
      { emisor: 'YO', hora: '18:38', id: 7, texto: 'Eso es clave. ¿Pusiste íconos?', status: 'visto' },
      { emisor: 'OTRO', hora: '18:39', id: 8, texto: 'Sí, con FontAwesome. Quedó lindo', status: 'visto' },
      { emisor: 'YO', hora: '18:41', id: 9, texto: '¡Me lo tenés que mostrar después!', status: 'visto' },
      { emisor: 'OTRO', hora: '18:42', id: 10, texto: 'Obvio, te paso el link por GitHub Pages', status: 'visto' }
    ]
  },
  {
    id: 5,
    name: 'Sofía',
    description: 'Mate, código y rock',
    avatar: '/Images/avatar_5.jpg',
    last_connection: '08:10',
    connection_status: 'online',
    mesagges: [
      { emisor: 'YO', hora: '13:00', id: 1, texto: '¿Ya arrancaste con el TP final?', status: 'visto' },
      { emisor: 'OTRO', hora: '13:01', id: 2, texto: 'Sí, estoy haciendo un to-do con Firebase', status: 'visto' },
      { emisor: 'YO', hora: '13:02', id: 3, texto: '¡Qué copado! ¿Te costó configurar la DB?', status: 'visto' },
      { emisor: 'OTRO', hora: '13:03', id: 4, texto: 'Un poco. Pero seguí un tutorial y lo resolví', status: 'visto' },
      { emisor: 'YO', hora: '13:05', id: 5, texto: 'Firebase es práctico pero tiene sus mañas', status: 'visto' },
      { emisor: 'OTRO', hora: '13:06', id: 6, texto: 'Tal cual. Pero el deploy fue sencillo', status: 'visto' },
      { emisor: 'YO', hora: '13:07', id: 7, texto: '¿Usaste Firestore o Realtime DB?', status: 'visto' },
      { emisor: 'OTRO', hora: '13:08', id: 8, texto: 'Firestore. Me pareció más ordenado', status: 'visto' },
      { emisor: 'YO', hora: '13:09', id: 9, texto: 'Te quedó joya entonces. Felicitaciones!', status: 'visto' },
      { emisor: 'OTRO', hora: '13:10', id: 10, texto: 'Gracias loco! Después te lo muestro bien', status: 'visto' }
    ]
  },
  {
    id: 6,
    name: 'Carla',
    description: 'Diseño + Código ❤️',
    avatar: '/Images/avatar_6.jpg',
    last_connection: '16:30',
    connection_status: 'online',
    mesagges: [
      { emisor: 'YO', hora: '14:01', id: 1, texto: '¿Ya hiciste el portfolio en React?', status: 'visto' },
      { emisor: 'OTRO', hora: '14:02', id: 2, texto: 'Sí! Lo subí a Netlify hace unos días', status: 'visto' },
      { emisor: 'YO', hora: '14:03', id: 3, texto: '¿Pusiste animaciones?', status: 'visto' },
      { emisor: 'OTRO', hora: '14:04', id: 4, texto: 'Sí, con Framer Motion. Re suave todo', status: 'visto' },
      { emisor: 'YO', hora: '14:05', id: 5, texto: 'Eso quiero aprender. ¿Es difícil?', status: 'visto' },
      { emisor: 'OTRO', hora: '14:06', id: 6, texto: 'Para nada, es bastante intuitivo', status: 'visto' },
      { emisor: 'YO', hora: '14:07', id: 7, texto: 'Pasame un ejemplo si podés 🙏', status: 'visto' },
      { emisor: 'OTRO', hora: '14:08', id: 8, texto: 'Dale, te armo un sandbox simple', status: 'visto' },
      { emisor: 'YO', hora: '14:09', id: 9, texto: 'Genia! Gracias', status: 'visto' },
      { emisor: 'OTRO', hora: '14:10', id: 10, texto: 'De nada, para eso estamos', status: 'visto' }
    ]
  },
  {
    id: 7,
    name: 'Nico',
    description: 'Café, bugs y commits ☕🐞',
    avatar: '/Images/avatar_7.jpg',
    last_connection: '22:10',
    connection_status: 'ofline',
    mesagges: [
      { emisor: 'YO', hora: '21:00', id: 1, texto: '¿Pudiste solucionar el error del map?', status: 'visto' },
      { emisor: 'OTRO', hora: '21:01', id: 2, texto: 'Sí, era porque el array venía undefined', status: 'visto' },
      { emisor: 'YO', hora: '21:02', id: 3, texto: 'Ah, clásico. useEffect a destiempo?', status: 'visto' },
      { emisor: 'OTRO', hora: '21:03', id: 4, texto: 'Exacto. Le puse una validación y listo', status: 'visto' },
      { emisor: 'YO', hora: '21:04', id: 5, texto: 'Perfecto, menos mal que lo resolviste', status: 'visto' },
      { emisor: 'OTRO', hora: '21:05', id: 6, texto: 'Ahora estoy viendo cómo usar Context', status: 'visto' },
      { emisor: 'YO', hora: '21:06', id: 7, texto: 'Te va a venir bien, lo usamos mucho', status: 'visto' },
      { emisor: 'OTRO', hora: '21:07', id: 8, texto: 'Sí, aunque todavía me confunde un poco', status: 'visto' },
      { emisor: 'YO', hora: '21:08', id: 9, texto: 'Yo lo uso solo cuando es necesario', status: 'visto' },
      { emisor: 'OTRO', hora: '21:09', id: 10, texto: 'Claro, como todo en React jaja', status: 'visto' }
    ]
  },
  {
    id: 8,
    name: 'Vicente',
    description: 'Aprendiendo a maquetar 🧠',
    avatar: '/Images/avatar_8.jpg',
    last_connection: '07:50',
    connection_status: 'ofline',
    mesagges: [
      { emisor: 'YO', hora: '10:00', id: 1, texto: '¿Terminaste la parte del formulario?', status: 'visto' },
      { emisor: 'OTRO', hora: '10:01', id: 2, texto: 'Sí, con validaciones en JS puro', status: 'visto' },
      { emisor: 'YO', hora: '10:02', id: 3, texto: '¿Sin librerías? ¡Re bien!', status: 'visto' },
      { emisor: 'OTRO', hora: '10:03', id: 4, texto: 'Quise practicar lógica, fue buena idea', status: 'visto' },
      { emisor: 'YO', hora: '10:04', id: 5, texto: '¿Te funcionó el regex del email?', status: 'visto' },
      { emisor: 'OTRO', hora: '10:05', id: 6, texto: 'Sí, aunque tuve que ajustar la expresión', status: 'visto' },
      { emisor: 'YO', hora: '10:06', id: 7, texto: 'Jajaja, esos regex son un mundo aparte', status: 'visto' },
      { emisor: 'OTRO', hora: '10:07', id: 8, texto: '¡Tal cual! Pero ya quedó bien', status: 'visto' },
      { emisor: 'YO', hora: '10:08', id: 9, texto: 'Después subilo a GitHub que quiero verlo', status: 'visto' },
      { emisor: 'OTRO', hora: '10:09', id: 10, texto: 'Obvio! Lo dejo público así lo revisás tranquilo', status: 'visto' }
    ]
  },
  {
    id: 9,
    name: 'Juliana',
    description: 'Pasión por el backend 🔧',
    avatar: '/Images/avatar_9.jpg',
    last_connection: '13:40',
    connection_status: 'online',
    mesagges: [
      { emisor: 'YO', hora: '11:00', id: 1, texto: '¿Cómo venís con Node?', status: 'visto' },
      { emisor: 'OTRO', hora: '11:01', id: 2, texto: 'Re bien. Estoy armando una API REST con Express', status: 'visto' },
      { emisor: 'YO', hora: '11:02', id: 3, texto: '¿Te manejás con Postman para probarla?', status: 'visto' },
      { emisor: 'OTRO', hora: '11:03', id: 4, texto: 'Sí, lo uso todo el tiempo', status: 'visto' },
      { emisor: 'YO', hora: '11:04', id: 5, texto: '¡Qué grande! Yo todavía peleo con las rutas', status: 'visto' },
      { emisor: 'OTRO', hora: '11:05', id: 6, texto: 'Después te paso una guía que me sirvió', status: 'visto' },
      { emisor: 'YO', hora: '11:06', id: 7, texto: 'Dale, te lo agradezco un montón', status: 'visto' },
      { emisor: 'OTRO', hora: '11:07', id: 8, texto: 'Todo suma en este camino jaja', status: 'visto' },
      { emisor: 'YO', hora: '11:08', id: 9, texto: 'Totalmente. Nos falta pero vamos bien', status: 'visto' },
      { emisor: 'OTRO', hora: '11:09', id: 10, texto: 'Vamos a ser full stackers antes de lo que pensás 😎', status: 'visto' }
    ]
  }
];

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts){
        if(Number (contact.id) === Number(contact_id)){
            return contact
        }
    }
    return null
}

/*Los servicio van a tener la lógica de negocio de mi aplicación, 
no es exclusivo de reacts, la lógica de negocio tiene que ver con las
posibilidades que brinda mi aplicación
*/