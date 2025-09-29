import Saludo from './assets/components/Saludo/Saludo'
import Ejercicio01 from './assets/components/Ejercicio1/Ejercicio01'
import Ejercicio02 from './assets/components/Ejercicio2/Ejercicio02'

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
      <Ejercicio01 />
      <>
      
      
      
      </>
      <Ejercicio02 />
    </>
  )
}

export default App
