import Saludo from './assets/components/Saludo/Saludo'
import AdivinaElNumero from './assets/components/AdivinaElNumero/AdivinaElNumero'
import Colores from './assets/components/Colores/Colores'

function App() {
  const nombres = {
    nombre1: "Juan",
    nombre2: "Franco",
    nombre3: "Ezequiel"
  }

  const apellidos = {
    apellido1: "Bach",
    apellido2: "Arancibia",
    apellido3: "Veron"
  }

  return (
    <>
      <Saludo nombre={nombres} apellido={apellidos} />
      <></>
      <AdivinaElNumero />
      <>
      
      
      
      </>
      <Colores />
    </>
  )
}

export default App
