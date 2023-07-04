interface LetterProps{
    key: number
    letter: string
    className: string
}

function Letter({key, letter, className}: LetterProps){
    return(
        <div className={className}>{letter}</div>
    )
}

export default Letter
