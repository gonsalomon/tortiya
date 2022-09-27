import React from 'react';
import gifHeader from '../../images/tortis.gif'
import './header.css';

/* hacer arreglo de imagenes e ir iterando para cambiar de imagen en el header
useEffect para las imagenes con la funcion
 */

function Header() {
  return (
    <img className='clase-header' src={gifHeader} alt="gif-de-tortillas" />
  )
}

export default Header