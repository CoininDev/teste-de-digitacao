import { useEffect, useState } from "react"

interface WPMCounterProps{
  startTime: number
  totalWords: number
}

function WPMCounter({startTime, totalWords}: WPMCounterProps){
  const [wpm, setWpm] = useState(0)
  useEffect(() => {
    const currentTime = new Date().getTime()
    const elapsedTimeInSec = (currentTime - startTime) / 1000
    const minutes = elapsedTimeInSec / 60
    const wordsPerMinute = totalWords / minutes

    setWpm(wordsPerMinute)
  }, [startTime, totalWords])

  return (
    <div className="wpm">
      <p>Palavras por Minuto: {wpm.toFixed(2)}</p>
    </div>
  );
}

export default WPMCounter
