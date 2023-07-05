import { useEffect, useState } from "react"
import Word from './Word'
import WPMResult from "./WPMResult"

interface SentenceProps{
    children: string
}

function Sentence({children}: SentenceProps){
    let [timeStart, setTimeStart] = useState<number>(0)
    let [timeEnd, setTimeEnd] = useState<number>(0)
    let [timeTaken, setTimeTaken] = useState(0)
    let [showWPMCounter, setShowWPMCounter] = useState(0)
    let [testStarted, setTestStarted] = useState<boolean>(false)

    let [activeWord, setActiveWord] = useState(0)
    let [activeLetter, setActiveLetter] = useState(0)
    let words = children.split(" ")
    
    //lendo teclado + regra de negócio
    let handleKeyPress = (event: KeyboardEvent) => {
        if(!testStarted){
          setTimeStart(performance.now())
          setTestStarted(true)
        }

        let lettersOfActiveWord = [...words[activeWord].split(""), " "]

        if(event.key === lettersOfActiveWord[activeLetter]){
            if(activeLetter < lettersOfActiveWord.length -1){
                setActiveLetter(activeLetter +1)


            }else{
                setActiveWord(activeWord +1)
                setActiveLetter(0)

                //teste acabou
                if(activeWord === words.length -1){
                  setTimeEnd(performance.now())
                  setShowWPMCounter(1)
                }
            }
        }

        //impedir que o site role para baixo ao pressionar espaço.
        if(event.key === " "){
          event.preventDefault()
        }
    }
    useEffect(() => {
      document.addEventListener("keypress", handleKeyPress)
      
      return () => {
        document.removeEventListener("keypress", handleKeyPress)
      }
    }, [activeLetter, words, activeWord, showWPMCounter])



    //gráfico
    if(showWPMCounter){
      return(
        <WPMResult timeStart={timeStart} timeEnd={timeEnd} totalWords={words.length} />
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
