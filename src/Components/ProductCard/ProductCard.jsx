import React from "react"


/* 
props siempre estara accesible para un componente
props SIEMPRE SERA UN OBJETO
si no hay props (no le pasamos ningun dato al componente) sera un objeto vacio
*/
function ProductCard ({nombre, precio}) {
    
 return (
        <div>
            <h2>{nombre}</h2>
            <span>El precio de mi producto es ${precio - (precio * 0.21)}</span>
        </div>
    )
}

export default ProductCard



/*function ProductCard ({nombre, precio}) { //acá desestructuré por parámetro, saqué el props y puse entre {} las propiedades del objeto desestruturandolo
    
    const producto = {
    precio: 1000,
    nombre: 'Cuchara metálica',
    id: 1
  }
  return (
        <div>
            <h2>{nombre}</h2>
            <span>El precio de mi producto es ${precio - (precio * 0.21)}</span>
        </div>
  )
}

export default ProductCard
*/