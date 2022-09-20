import React from 'react'
import { useState, useEffect } from 'react'

export default function Login({login, setLogin}) {
  // const [login, setLogin] = useState("Logueate");
  // comentado por colisión de nombre con las props
  const [logged, setLogged] = useState(false)
  const [action, setAction] = useState('none')

  useEffect(() => {
    setLogged(login)
  }, [login])
  
  switch(action){
    case 'login':
      //TODO
      break
    case 'register':
      //TODO
      break
    case 'none':
      return (
        <ul>
          <li onClick={() => { setAction('login')}}>Tengo cuenta</li>
          <li onClick={() => { setAction('register')}}>No tengo cuenta</li>
        </ul>
      )
    default:
      return (<p>Something went wrong. Please contact the manteinance crew</p>)
  }
}
