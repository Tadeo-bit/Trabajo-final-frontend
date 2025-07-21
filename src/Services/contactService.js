const contacts = [
  {
    id : 1,
    name: 'Pedro',
    description: 'solo se vive una vez',
    avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
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
    avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
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