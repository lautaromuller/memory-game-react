import { CardType } from "../types/types"

type Props = {
    cards: CardType[]
    turn: boolean
    restartGame: () => void
    started: boolean
}

export const WinnerMenu = ({ cards, turn, restartGame, started }: Props) => {

    const winner = cards.every(card => card.correct && card.selected)

    if (!winner || !started) return null

    return (
        <section className='winner-menu'>
            <div className='text'>
                <h2>Ganó:</h2>

                <header className='winner'>
                    {winner
                        ? (turn
                            ? <span>Jugador 1</span>
                            : <span>Jugador 2</span>)
                        : <span>🤝🏼</span>
                    }
                </header>

                <footer>
                    <button onClick={restartGame} className="buttonRestart">Jugar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}