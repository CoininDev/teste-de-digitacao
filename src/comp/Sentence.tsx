import { useEffect, useState } from "react"
import Word from './Word'

interface SentenceProps{
    children: string
}

function Sentence({children}: SentenceProps){
    let [activeWord, setActiveWord] = useState(0)
    let [activeLetter, setActiveLetter] = useState(0)
    let words = children.split(" ")
    let letters = [...words[activeWord].split(""), " "]

    //lendo teclado + regra de negócio
    let handleKeyDown = (event: KeyboardEvent) => {
        if(event.key === letters[activeLetter]){
            if(activeLetter < letters.length -1){
                setActiveLetter(activeLetter +1)

                
            }else{
                setActiveWord(activeWord +1)
                setActiveLetter(0)

                if(activeWord === words.length -1){
                    setActiveWord(0)
                    setActiveLetter(0)
                }
            }
        }

        if(event.key === "Backsapce"){
            if(activeLetter > 0){
                setActiveLetter(activeLetter -1)
            }else{
                setActiveWord(activeWord -1)
                setActiveLetter(letters.length -1)
            }
        }
    }
    useEffect(() => {
      //keypress lê o que é impresso, ou seja, como um texto, serve para ler as letras com acento como uma coisa só
      //já o keydown lê toda tecla que for pressionada, incluindo a 'Backspace', importante para a regra de negócio
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("keypress", handleKeyDown)
      
      return () => {
        document.removeEventListener("keydown", handleKeyDown)
        document.removeEventListener("keypress", handleKeyDown)
      }
    }, [activeLetter])

    //gráfico
    let createWord = (word: string, index: number) => {
        //                            :activeWord                                                     :not activeWord
        return activeWord === index ? (<Word word_str={word} activeLetter={activeLetter}></Word>) : (<Word word_str={word} activeLetter={-1}></Word>)
    }
    return(
        <div className="sentence">
            {words.map((word, index) => (
                createWord(word, index)                
            ))}
        </div>
    )
}

export default Sentence