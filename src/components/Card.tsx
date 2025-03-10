type Props = {
  id: number
  imageSrc: string
  selectedCard: boolean
  selected: (id: number) => void
}

export const Card = ({ id, imageSrc, selectedCard, selected }: Props) => {
  return (
    <div className="card">
      <div className={`card-inner ${selectedCard ? 'flipped' : ''}`}>
        <button onClick={() => selected(id)} className="card-btn">
          <div className="card-front">
            {imageSrc === '❓' ? <span style={{backgroundColor: "transparent"}}>❓</span> : <img src={imageSrc} style={{width: "70px", height: "90px"}}></img>}
          </div>
          <div className="card-back">
            ❓
          </div>
        </button>
      </div>
    </div>
  )
}