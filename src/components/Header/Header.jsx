import React, { useEffect } from 'react'
import { useState } from 'react';
import './header.css';

/* hacer arreglo de imagenes e ir iterando para cambiar de imagen en el header
useEffect para las imagenes con la funcion
 */

function Header() {
  const [imagePath, setImagePath] = useState("1.jpeg")

  const imageCycle = () => {
    setInterval(setImagePath(Number(imagePath.charAt(0)) < 5 ? (Number(imagePath.charAt(0))+1)+".jpeg" : "1.jpeg"),
    3000)
  }

  useEffect(()=>imageCycle(), [])
  
  return (
    <div className='main-row'>
      <h1>TortiYa</h1>
      <img className='background-image' src={"../../"+imagePath+".jpeg"} alt=''/>
    </div>
  )
}

export default Header