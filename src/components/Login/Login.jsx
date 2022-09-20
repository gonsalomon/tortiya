import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../../services/db';

export default function Login({login, setLogin}) {
  // const [login, setLogin] = useState("Logueate");
  // comentado por colisión de nombre con las props
  const [logged, setLogged] = useState(false);
  const [action, setAction] = useState('none');
  const [data, setData] = useState([
    '',
    ''
  ])
  function handleChange(event){
    if(event.target.name==='email'){
      setData([event.target.value,data[1]])
    }else{
      setData([data[0],event.target.value])
    }
  }
  async function handleLogin(event){
    event.preventDefault();
    let {user, error} = await supabase.auth.signInWithPassword({
      email: data[0],
      password: data[1]
    })
  }
  async function handleRegister(event){
    event.preventDefault()
    let {user, error} = await supabase.auth.signUp({
      email: data[0],
      password: data[1]
    })
  }
  useEffect(() => {
    setLogged(login)
  }, [login])
  
  switch(action){
    case 'login':
      return (
        <div>
            <label htmlFor="">Mail</label>
            <input onChange={handleChange} type="email" name="email" id=""/>
            <label htmlFor="">Contraseña</label>
            <input onChange={handleChange} type="password" name="password" id="" />
            <button onClick={handleLogin} >Iniciar sesión</button>          
        </div>
      )
    
    case 'register':
      return(
        <div>
            <label htmlFor="">Mail</label>
            <input onChange={handleChange} type="email" name="email" id=""/>
            <label htmlFor="">Contraseña</label>
            <input onChange={handleChange} type="password" name="password" id="" />
            <button onClick={handleRegister} >Registrarme</button>          
        </div>
      )
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
