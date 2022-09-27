import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar.jsx'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer.jsx'
import { useEffect, useState } from 'react'
import { supabase } from './services/db'
import './App.css'

function App() {
  const [cards, setCards] = useState([]);
  const [section, setSection] = useState('tortillas');
  const [logged, setLogged] = useState('false')
  const [user, setUser] = useState('')


  useEffect(() => {
    async function fetchCards() {
      let { data: tortillas, error } = await supabase
        .from('tortillas')
        .select('*')
      console.log(error)

      return tortillas
    }
    //seteo el arreglo que me viene por db a cards
    setCards(fetchCards())
  }, [])

  return (
    <div className="App col">
      <Header />
      <main className='main-row'>
        {/* envio por props al componente Content */}
        <Content  section={section} cards={cards} log={{logged: logged, setLogged: setLogged}} usr={{user: user, setUser: setUser}} />
        <NavBar setSection={setSection} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
