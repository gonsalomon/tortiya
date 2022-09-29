import React from 'react';
import img from '../../images/5.jpeg';
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
                </section>
            )
        case 'pedidos':
            return(
                <div>
                    <Login usr={usr} setLogin={log.setLogged} login={log.logged}/>
                </div>
            )
        case 'about':
            return (<h1>Sección en construcción 2</h1>)
        default:
            return (<h1>404: sección no encontrada</h1>)
    }
}


export default Content