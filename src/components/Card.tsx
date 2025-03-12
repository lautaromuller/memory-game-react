type Props = {
  id: number
  name: string
  imageSrc: string
  selectedCard: boolean
  selected: (id: number) => void
}

export const Card = ({ id, name, imageSrc, selectedCard, selected }: Props) => {
  return (
    <div className="card">
      <div className={`card-inner ${selectedCard ? 'flipped' : ''}`}>
        <button onClick={() => selected(id)} className="card-btn">
          <div className="card-front">
            {imageSrc === '❓'
              ? <img src="/public/Escudo.png" alt="Dorso de carta" className="imgCard-back" />
              : <img src={imageSrc} alt={`Carta de ${name}`} title={`${name}`} className="imgCard" />
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