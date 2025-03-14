import { CardType } from "../types/types"
import confetti from 'canvas-confetti'
import { Player } from "./Player"

type Props = {
    cards: CardType[]
    restartGame: () => void
    started: boolean
    scoreOne: number
    scoreTwo: number
}

export const WinnerMenu = ({ cards, restartGame, started, scoreOne, scoreTwo }: Props) => {

    const winner = cards.every(card => card.correct && card.selected)

    if (!winner || !started) return null
    confetti()

    return (
        <section className='winner-menu'>
            <div className='text'>
                <h2>Ganó:</h2>

                <header className='winner'>
                    {winner
                        ? (scoreOne > scoreTwo
                            ? <span>Jugador 1</span>
                            : <span>Jugador 2</span>)
                        : <span>🤝🏼</span>
                    }
                </header>

                <main className="players">
                    <Player score={scoreOne} turn={scoreOne > scoreTwo ? true : false} />
                    <Player score={scoreTwo} turn={scoreTwo > scoreOne ? true : false} />
                </main>

                <footer>
                    <button onClick={restartGame} className="buttonRestart">Jugar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}