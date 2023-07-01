import Sentence from './comp/Sentence'

function App() {
  let texto = "Teste de Digitação.";
  

  return (
    <div>
        <h1>Teste de Digitação</h1>
        <Sentence>{texto}</Sentence>
    </div>
  );
}

export default App
