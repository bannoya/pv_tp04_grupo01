import { useState } from "react"
import { comparacion } from "./Comparacion"

const numeroRandom = Math.floor(Math.random() * 101)
function Ejercicio01() {
    const [num, setNum] = useState("")

    const [resultado, setResultado] = useState("")

    const manejarSubmit = (e) => {
        e.preventDefault()
        console.log(num, numeroRandom)

    }


   

    return (
        <div>
            <h1>Adivinar el numero</h1>
            <p>Ingresa un numero del 1 al 100</p>
            <p>Cantidad de intentos </p>
            <form onSubmit={manejarSubmit}>
                <div>
                    <input
                        type="number"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}

                    />
                </div>

                <button onClick={() => setResultado(comparacion(num, numeroRandom))}>
                    Verificar
                </button>

                <p>Resultado: {resultado}</p>

            </form>

            <button type="oneClick">Me Rindo</button>
        </div>

    )
}

export default Ejercicio01