import Letter from "./Letter"

interface WordProps{
    word_str: string
    activeLetter: number
}

function Word({word_str, activeLetter}: WordProps){
    let word_arr = word_str.split("")
    let letters = [...word_arr, " "]
    
    let isActive = (index: number) => {
        return activeLetter === index ? "letter active-letter" : "letter"
    }

    return(
        <div className="word">
            {letters.map((letter, index) => (
                <Letter key={index} letter={letter} className={isActive(index)} />
            ))}
        </div>
    )
}

export default Word