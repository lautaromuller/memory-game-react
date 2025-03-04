type Props = {
  id: number
  name: string
  selectedCard: boolean
  selected: (id: number) => void
}

export const Card = ({ id, name, selectedCard, selected }: Props) => {
  return (
    <button onClick={() => selected(id)} className={selectedCard ? 'selected' : 'card'}>
      {name}
    </button>
  )
}