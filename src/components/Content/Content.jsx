import React from 'react'

function Content({cards, section}) {
  switch (section) {
    case 'tortillas':
        return (
            <section className='content-tortilla'>
                <h3>Nombre:Española</h3>
                <p>Variedad:normal</p>
                <p>Precio:$400</p>
                <p>Relleno:jamon y queso</p>
             {/*    {()=>{
                    cards.map((card)=>{
                        return (
                        <div>
                            <img src={card.img} alt='Imagen de una tortilla'/>
                            <h3>{card.nombre}Española</h3>
                            <b>{card.variedad}Normal</b>
                            <p>Precio:200 {card.precio}</p>
                            <p>Relleno con {card.relleno}</p>
                            
                        </div>
                        )
                    })
                }
                } */}
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