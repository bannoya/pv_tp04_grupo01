import Ejercicio01 from './assets/components/Ejercicio1/Ejercicio01'
import Saludo from './assets/components/Saludo'

function App() {
  let nombre = {
    nombre1: "Juan",
    nombre2: "Ezequiel",
    nombre3: "Franco"

  }
  let apellido = {
    apellido1: "Bach",
    apellido2: "Veron",
    apellido3: "Arancibia"

  }
 

  return (
    <>


      <Saludo nombre={nombre} apellido={apellido} />
      <Ejercicio01 />



    </>)
}
export default App