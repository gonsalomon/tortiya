import React, { useEffect } from 'react'
import { useState } from 'react';
import './header.css';

/* hacer arreglo de imagenes e ir iterando para cambiar de imagen en el header
useEffect para las imagenes con la funcion
 */

function Header() {
  const [image, setImage] = useState(1)

  const imageCycle = () => {
    setInterval(()=>{
      setImage(image < 5 ? image+1 : 1)
    }, 3000)
  }

  
  
  useEffect(()=>imageCycle(), [])
  

  return (
    <div className='main-row'>
      <h1>TortiYa</h1>
      <img className='background-image' src={"../../"+image+".jpeg"} alt=''/>
    </div>
  )
}

export default Header