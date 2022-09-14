import Header from './components/Header'
import Menu from './components/Menu'
import Card from './components/Card'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import {supabase} from './services/db'

function App() {
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    //fetch and fill in cards from DB (filling into cards w useCards)
  },[cards])

  return (
    <div className="App col">
      <header className='row'>
        <Header />
        <Menu />
      </header>
      <section className='board'>
        {()=>{for (let card in cards){
          return(
            <Card data={card} />
          )
        }}}
      </section>
      <Footer />
    </div>
  );
}

export default App;
