import Sentence from "./Sentence";

function App() {
  let str_letters = "Teste de Digitação.";
  let letters = str_letters.split("");

  return (
    <div className="App">
        <h1>Teste de Digitação</h1>
        <Sentence letters={letters} />
    </div>
  );
}

export default App;
