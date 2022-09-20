import React from 'react';
import img from '../../images/imagen-de-prueba.png';
import './Content.css';
import Login from '../Login/Login';

function Content({ cards, section, log, usr }) {
    switch (section) {
        case 'tortillas':
            return (
                <section className='content-tortilla'>
                    <img src={img} alt="tortilla-de-papa" />
                    <div className='tortilla-data'>
                        <h3>Nombre:Española</h3>
                        <p>Variedad:normal</p>
                        <p>Precio:$400</p>
                        <p>Relleno:jamon y queso</p>
                    </div>
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
            return(
                <div>
                    <Login setLogin={log.setLogged} login={log.logged}/>
                </div>
            )
            /*esto debería ser interno al componente Login, que sí sabe ese login. Le hice un refactor,
            ahora se llama 'action' esa string.
            switch (login) {
                case "Logueate":
            
                    return (<div>
                        <form action="">
                            <label>email</label>
                            <input type="email" name="email" />
                            <label>Nombre</label>
                            <input type="text" name="nombre" />
                            <label>Apellido</label>
                            <input type="text" name="apellido" />
                        </form>
            
            
            
                    </div>
                    ) 
                case "no-log":
                    return (<div>
                        <form action="">
                            <label>email</label>
                            <input type="email" name="email" />
                            <label>Nombre</label>
                            <input type="text" name="nombre" />
                            <label>Apellido</label>
                            <input type="text" name="apellido" />
                        </form>
                    </div>
                    ) 
                default:
                    break; 
            } */

        /*     return (<div>
                <form action="">
                    <label>email</label>
                    <input type="email" name="email" />
                    <label>Nombre</label>
                    <input type="text" name="nombre" />
                    <label>Apellido</label>
                    <input type="text" name="apellido" />
                </form>
            </div>
            ) */
        case 'about':
            return (<h1>Sección en construcción 2</h1>)
        default:
            return (<h1>404: sección no encontrada</h1>)
    }
}


export default Content