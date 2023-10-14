import Banner from "./components/Banner/Banner"
import TextField from "./components/TextField/TextField"

function App() {

  return (
    <>
      <Banner />
      <TextField textLabel="Nome" textPlaceholder="Digite o seu nome" />
      <TextField textLabel="Cargo" textPlaceholder="Digite o seu cargo" />
    </>
  )
}

export default App
