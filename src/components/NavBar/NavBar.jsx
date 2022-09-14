import React from 'react'
import './NavBar.css'

function NavBar({setSection}) {
  return (
    <div>
      <ul className='col'>
        <li onClick={()=>setSection('tortillas')}>Tortillas</li>
        <li onClick={()=>setSection('pedidos')}>Pedidos</li>
        <li onClick={()=>setSection('about')}>Sobre nosotros</li>
      </ul>
    </div>
  )
}

export default NavBar