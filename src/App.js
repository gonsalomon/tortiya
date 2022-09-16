import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar.jsx'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer.jsx'
import { useEffect, useState } from 'react'
import { supabase } from './services/db'

function App() {
  const [cards, setCards] = useState([])
  const [section, setSection] = useState('tortillas')

  useEffect(() => {
    async function fetchCards() {
      let { data: tortillas, error } = await supabase
        .from('tortillas')
        .select('*')
      console.error(error)

      return tortillas
    }
    //seteo el arreglo que me viene por db a cards
    setCards(fetchCards())
  }, [])

  return (
    <div className="App col">
      <Header />
      <main className='row'>
        {/* envio por props al componente Content */}
        <Content section={section} cards={cards} />
        <NavBar setSection={setSection} />
        {console.log(section)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
