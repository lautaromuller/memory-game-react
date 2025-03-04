import { useState, useEffect } from 'react'
import './App.css'
import { Card } from './components/Card'
import { loadedCards } from './utils/utils'
import { useGameLogic } from './hooks/useGameLogic'
import { CardType } from './types/types'
import { Player } from './components/Player'

const data: string[] = ["🍔", "💖", "🧉", "🚗", "⭐", "⚽", "👽", "🐔", "🔥", "☢", "🌝", "🍺", "🍓", "🍄", "🏈", "💊", "😎", "😈", "🐻", "👄"]

function App() {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    setCards(loadedCards(data))
  }, [])

  const { handleSelected, scoreOne, scoreTwo, turn } = useGameLogic({ cards, setCards })

  return (
    <>
      <h1 className='title'>MEMORY GAME</h1>
      <div className='container'>
        <Player score={scoreOne} text='Jugador 1' turn={turn}/>

        <div className='board'>
          {cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              name={card.selected ? card.name : '❓'}
              selected={handleSelected}
              selectedCard={card.selected}
            >
            </Card>
          ))}
        </div>

        <Player score={scoreTwo} text='Jugador 2' turn={!turn}/>
      </div>
    </>
  )
}

export default App
