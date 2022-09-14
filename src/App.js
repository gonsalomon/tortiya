import Header from './components/Header'
import Menu from './components/Menu'
import Card from './components/Card'
import Footer from './components/Footer/Footer.jsx'
import { useState } from 'react'

function App() {
  const [cards, setCards] = useState([]);

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
