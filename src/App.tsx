import { useState, useEffect } from 'react'
import './App.css'
import { Card } from './components/Card'
import { loadedCards } from './utils/utils'
import { useGameLogic } from './hooks/useGameLogic'
import { CardType } from './types/types'
import { Player } from './components/Player'
import { WinnerMenu } from './components/WinnerMenu'

const data: string[] = ["Azurduy", "Belgrano", "Guemes", "Mitre", "Moreno", "Quiroga", "Rivadavia", "Roca", "Rosas", "Saavedra", "San_Martin", "Sarmiento", "Alberdi", "Urquiza", "Pellegrini"]

function App() {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    setCards(loadedCards(data))
  }, [])

  const { handleSelected, scoreOne, scoreTwo, turn, resetGameLogic, started } = useGameLogic({ cards, setCards })

  const restartGame = () => {
    setCards(loadedCards(data))
    resetGameLogic()
  }

  return (
    <main className='game'>
      <h1>MEMORY GAME</h1>
      <button onClick={restartGame} className='buttonRestart'>Reiniciar Juego</button>
      <section className='board'>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            selected={handleSelected}
            selectedCard={card.selected}
          >
          </Card>
        ))}
      </section>

      <section className='players'>
        <Player score={scoreOne} turn={turn} />
        <Player score={scoreTwo} turn={!turn} />
      </section>

      <WinnerMenu restartGame={restartGame} cards={cards} started={started} scoreOne={scoreOne} scoreTwo={scoreTwo} />

    </main>
  )
}

export default App
