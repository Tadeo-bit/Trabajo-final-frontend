//Ejecicio: tengo: ['hola', 'qué tal?', 'Buenos días']
//quiero tener: [<div>'hola'</div>, <div>'qué tal?'</div>,<div> 'Buenos días'</div>]

const array_original = ['hola', 'qué tal?', 'Buenos días']
const resultado = []

for (let elemento of array_original) {
  resultado.push ( <div>{elemento}</div> )
}
console.log(resultado) //esto po r consilo se ve mal porque es HTML

//SI QUERES RENDERIZARLO: 
return (
    <div>
        {resultado}
    </div>
)

//todo esto es válido pero no es la forma en que comunmente se lo hace

