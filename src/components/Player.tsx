type Props = {
    score: number
    turn: boolean
}

export const Player = ({ score, turn }: Props) => {
    return (
        <div className="player">
            <span className={turn ? "active" : "score"}>{score}</span>
        </div>
    )
}