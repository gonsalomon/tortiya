import React, {useState} from 'react'
import { FaSun, FaMoon } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    if(document.body.classList.contains==='light'){
      document.body.classList.remove('light')
      document.body.classList.add('dark')
      setTheme('dark') 
    }else{
      document.body.classList.add('light')
      document.body.classList.remove('dark')
      setTheme('light')
    }
  }

  return (
    <div className='main-row'>
      <h1>TortiYa</h1>
      <button type="button" onClick={toggleTheme}>{()=>{return theme==='dark'?<FaSun />:<FaMoon/>}}</button>
    </div>
  )
}

export default Header