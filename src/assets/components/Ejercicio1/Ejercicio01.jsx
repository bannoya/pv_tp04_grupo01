import { useState } from "react"
import {comparacion,rendirse} from "./comparacion"
import "../../../../public/style/Ejercicio01.css"

const numeroRandom = Math.floor(Math.random() * 100 + 1)
function Ejercicio01() {
    const [num, setNum] = useState("");

    const [resultado, setResultado] = useState("");

    const [contador, setContador] = useState(0);

    const [mensaje, setMensaje] = useState("");

    const manejarSubmit = (e) => {
        e.preventDefault()
        console.log(num, numeroRandom)

    }


    return (
        <div className="game-container">
            <h1 className="title">Adivinar el numero</h1>
            <p className="subtitle">Ingresa un numero del 1 al 100</p>
            <p className="attemps">Cantidad de intentos: {contador} </p>
            <form onSubmit={manejarSubmit} className="form">
                <div>
                    <input
                        className="input-number"
                        type="number"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}

                    />
                </div>

                <button className="btn verify" onClick={() =>{
                    setResultado(comparacion(num, numeroRandom));
                    setContador(contador+1)}}>
                    Verificar
                </button>
                 <p className="resultado">{resultado}</p>

            </form>

            <button className="btn surrender" onClick={() => setMensaje(rendirse(numeroRandom,contador))}>Me Rindo</button>
            <p className="mensaje">{mensaje}</p>
        </div>

    )
}

export default Ejercicio01