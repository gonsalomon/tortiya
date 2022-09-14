import React from 'react'

function Content({cards, section}) {
  switch (section) {
    case 'tortillas':
        return (
            <section className='board'>
                {()=>{
                    console.log(typeof cards)
                    cards.map((card)=>{
                        return (
                        <div key={card.id}>
                            <img src={card.img} alt='Imagen de una tortilla'/>
                            <h3>{card.nombre}</h3>
                            <b>{card.variedad}</b>
                            <p>Precio: {card.precio}</p>
                            <p>Relleno con {card.relleno}</p>
                        </div>
                        )
                    })
                }
                }
              </section>
          )
    case 'pedidos':
        return (<h1>Sección en construcción 1</h1>)
    case 'about':
        return (<h1>Sección en construcción 2</h1>)
    default:
        return (<h1>404: sección no encontrada</h1>)
  }
}

export default Content