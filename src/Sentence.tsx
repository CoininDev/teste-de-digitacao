import { useState, useEffect } from "react"

interface SentenceProps{
    letters: string[]
}

function Sentence({letters}: SentenceProps) {
    const [activeLetter, setActiveLetter] = useState(0)

    let isActive = (index: number) => {
      return activeLetter === index ? "letter active-letter" : "letter"
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if(event.key === letters[activeLetter]){
        
        if(activeLetter < letters.length -1){
          setActiveLetter(activeLetter +1)
        }else{
          setActiveLetter(0)
        }
        
        
      }
      if(event.key === "Backspace"){
        if(activeLetter > 0){
          setActiveLetter(activeLetter -1) 
        }
      }
      
    }

    useEffect(()=>{
      console.log(activeLetter)
      //keypress lê o que é impresso, ou seja, como um texto, serve para ler as letras com acento como uma coisa só
      //já o keydown lê toda tecla que for pressionada, incluindo a 'Backspace', importante para a regra de negócio
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("keypress", handleKeyDown)
      return () => {
        document.removeEventListener("keydown", handleKeyDown)
        document.removeEventListener("keypress", handleKeyDown)
      }
    }, [activeLetter])

    return (
      <div className="word">
        {letters.length === 0 && <span>Nada.</span>}
        {letters.map((letter, index) => (
          <div key={index} className={isActive(index)}>{letter}</div>
        ))}
      </div>
    )
}

export default Sentence
