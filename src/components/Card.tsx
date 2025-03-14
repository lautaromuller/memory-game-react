import escudo from '../assets/Escudo.png'

type Props = {
  id: number
  name: string
  selectedCard: boolean
  selected: (id: number) => void
}

export const Card = ({ id, name, selectedCard, selected }: Props) => {
  return (
    <div className="card">
      <div className={`card-inner ${selectedCard ? 'flipped' : ''}`}>
        <button onClick={() => selected(id)} className="card-btn">
          <div className="card-front">
            {!selectedCard
              ? <img src={escudo} alt="Dorso de carta" className="imgCard-back" />
              : <img src={`${name}.jpg`} alt={`Carta de ${name}`} title={`${name}`} className="imgCard" />
            }
          </div>
          <div className="card-back">
            ❓
          </div>
        </button>
      </div>
    </div>
  )
}