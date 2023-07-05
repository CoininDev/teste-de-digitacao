interface WPMCounterProps{
  timeStart: number
  timeEnd: number
  totalWords: number
}

function WPMCounter({timeStart, timeEnd, totalWords}: WPMCounterProps){
  const wpmcount = (): number => {
    const timeTaken = (timeEnd - timeStart) /1000
    const minutes = timeTaken / 60
    const wpm = totalWords / minutes
    return wpm
  }


  return (
    <div className="wpm">
      <p>Palavras por Minuto: {wpmcount().toFixed(2)}</p>
    </div>
  );
}

export default WPMCounter
