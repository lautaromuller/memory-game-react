type Props = {
    score: number
    text: string
    turn: boolean
}

export const Player = ({ score, text, turn }: Props) => {
    return (
        <div className="player">
            <span>{text}</span>
            <span className={turn ? "active" : "score"}>{score}</span>
        </div>
    )
}