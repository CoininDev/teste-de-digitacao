import { useEffect, useState } from "react"
import Word from './Word'
import WPMCounter from "./WPMCounter"

interface SentenceProps{
    children: string
}

function Sentence({children}: SentenceProps){
    let [startTime, setStartTime] = useState(0)
    let [showWPMCounter, setShowWPMCounter] = useState(0)
    let [activeWord, setActiveWord] = useState(0)
    let [activeLetter, setActiveLetter] = useState(0)
    let words = children.split(" ")
    
    //lendo teclado + regra de negócio
    let handleKeyDown = (event: KeyboardEvent) => {
        let lettersOfActiveWord = [...words[activeWord].split(""), " "]

        if(event.key === lettersOfActiveWord[activeLetter]){
            if(activeLetter < lettersOfActiveWord.length -1){
                setActiveLetter(activeLetter +1)

                
            }else{
                setActiveWord(activeWord +1)
                setActiveLetter(0)

                if(activeWord === words.length -1){
                    setActiveWord(0)
                    setActiveLetter(0)
                    setShowWPMCounter(1)
                }
                if(startTime === 0){
                  setStartTime(new Date().getTime())
                }
            }
        }
    }
    useEffect(() => {
      document.addEventListener("keypress", handleKeyDown)
      
      return () => {
        document.removeEventListener("keypress", handleKeyDown)
      }
    }, [activeLetter, words, activeWord, startTime, showWPMCounter])



    //gráfico
    if(showWPMCounter){
      return(
        <WPMCounter startTime={startTime} totalWords={words.length} />
      )
    }

    return(
        <div className="sentence">
            {words.map((word, index) => (
              <Word
                key={index}
                word_str={word}
                activeLetter={activeWord === index ? activeLetter : -1}
              />
            ))}
        </div>
    )
}

export default Sentence
