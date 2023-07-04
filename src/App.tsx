import Sentence from './comp/Sentence'

function App() {
  let texto = 'James Marshall "Jimi" Hendrix (nascido Johnny Allen Hendrix; Seattle, 27 de novembro de 1942; Londres, 18 de setembro de 1970) foi um guitarrista, cantor e compositor norte-americano. Em praticamente todas as listas já publicadas de melhores guitarristas da história, ocupa o primeiro lugar, é um dos mais influentes músicos de sua era, em diversos gêneros musicais.';
  

  return (
    <div className='app'>
        <h1>Teste de Digitação</h1>
        <Sentence>{texto}</Sentence>
    </div>
  );
}

export default App
