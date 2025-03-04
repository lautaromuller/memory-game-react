import { useState, useEffect} from "react"
import { CardType } from "../types/types"

type Props = {
    cards: CardType[]
    setCards: React.Dispatch<React.SetStateAction<CardType[]>>
}

export const useGameLogic = ({ cards, setCards }: Props) => {
    const [firstTurn, setFirstTurn] = useState<string | null>(null)
    const [secondTurn, setSecondTurn] = useState<string | null>(null)
    const [scoreOne, setScoreOne] = useState<number>(0)
    const [scoreTwo, setScoreTwo] = useState<number>(0)
    const [turn, setTurn] = useState<boolean>(true) //true: jugador uno, false: jugador dos

    const handleSelected = (id: number) => {
        if (firstTurn && secondTurn) return
        setCards(prevCards => prevCards.map(card =>
            card.id === id ? { ...card, selected: true } : card
        ))

        if (!firstTurn) {
            setFirstTurn(cards.find(card => card.id === id && !card.correct)?.name || '')
        } else {
            setSecondTurn(cards.find(card => card.id === id && !card.correct)?.name || '')
        }
    }


    useEffect(() => {
        if (!firstTurn || !secondTurn) return

        if (firstTurn === secondTurn) {
            setCards(prevCards => prevCards.map(card =>
                card.selected ? { ...card, correct: true } : card
            ))
            if (turn) {
                setScoreOne(prevScore => prevScore + 1)
            } else if (!turn) {
                setScoreTwo(prevScore => prevScore + 1)
            }
        }else{
            setTurn(!turn)

        }


        setTimeout(() => {
            setFirstTurn(null);
            setSecondTurn(null);
            setCards(prevCards => prevCards.map(card =>
                card.selected && !card.correct ? { ...card, selected: false } : card
            ))
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [secondTurn])

    return { handleSelected, scoreOne, scoreTwo, turn }
}

