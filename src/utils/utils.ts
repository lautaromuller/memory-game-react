import { CardType } from '../types/types'

export const loadedCards = (data: string[]): CardType[] => {
  const duplicatedCards: CardType[] = [...data, ...data]
  .map((name, index) => ({ name:name, id: index + 1, selected: false, correct: false }))
  .sort(() => Math.random() - 0.5)

  return duplicatedCards
}