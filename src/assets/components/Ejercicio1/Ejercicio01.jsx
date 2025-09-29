import { useState } from "react"
import { comparacion, rendirse } from "./Comparacion"
import "../../../../public/style/Ejercicio01.css"

const numeroRandom = Math.floor(Math.random() * 100 + 1)

function Ejercicio01() {
    const [num, setNum] = useState("")
    const [resultado, setResultado] = useState("")
    const [contador, setContador] = useState(0)
    const [mensaje, setMensaje] = useState("")
    const [finJuego, setFinJuego] = useState(false)

    const manejarSubmit = (e) => {
        e.preventDefault()
        console.log(num, numeroRandom)
    }

    const verificarNumero = () => {
        const r = comparacion(num, numeroRandom)
        setResultado(r)
        setContador(contador + 1)

        if (r.includes("¡Acertaste!")) {
            setFinJuego(true)
        }
    }

    const rendirseJuego = () => {
        setMensaje(rendirse(numeroRandom, contador))
        setFinJuego(true)
    }

    return (
        <div className="game-container">
            <h1 className="title">Adivinar el numero</h1>
            <p className="subtitle">Ingresa un numero del 1 al 100</p>
            <p className="attemps">Cantidad de intentos: {contador}</p>

            <form onSubmit={manejarSubmit} className="form">
                <div>
                    <input
                        className="input-number"
                        type="number"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                        disabled={finJuego}
                    />
                </div>

                <button 
                    type="button"
                    className="btn verify" 
                    onClick={verificarNumero}
                    disabled={finJuego}
                >
                    Verificar
                </button>
                
                <p className="resultado">{resultado}</p>
            </form>

            <button 
                className="btn surrender" 
                onClick={rendirseJuego}
                disabled={finJuego}
            >
                Me Rindo
            </button>

            <p className="mensaje">{mensaje}</p>
        </div>
    )
}

export default Ejercicio01