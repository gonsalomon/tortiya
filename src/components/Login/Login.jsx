import React from 'react'
import {useState } from 'react'

export default function Login() {
  const [login, setLogin] = useState("Logueate");
  return (
    <div>
    <li onClick={()=>{setLogin("Logueate")}}>Tengo cuenta</li>
    <li onClick={()=>{setLogin("No-log")}}>No tengo cuenta</li>

    

</div>
  )
}
