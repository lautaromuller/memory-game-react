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
            {imageSrc === '❓' ? <img src="/public/Escudo.png" style={{width: "80px", height: "90px"}}/> : <img src={imageSrc} alt={`${name}`} title={`${name}`} style={{width: "90px", height: "110px"}}/>}
          </div>
          <div className="card-back">
            ❓
          </div>
        </button>
      </div>
    </div>
  )
}