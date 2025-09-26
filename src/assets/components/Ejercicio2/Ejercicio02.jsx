import { useState, useEffect } from "react";

function Ejercicio02() {
    const colores = [
        "#3498db", // Azul
        "#2ecc71", // Verde
        "#e74c3c", // Rojo
        "#f1c40f", // Amarillo
        "#9b59b6", // Violeta
        "#1abc9c", // Turquesa
        "#e67e22", // Naranja
        "#34495e", // Gris azulado oscuro
    ];


    const [colorBotones, setColorBotones] = useState(colores.slice(0, 4));
    const [mensaje, setMensaje] = useState("");
    const [contador, setContador] = useState(0);
    const [ganador, setGanador] = useState(false);


    useEffect(() => {
        let haGanado = false;
        for (let i = 0; i < colores.length; i++) {
            let contador = 0;
            for (let index = 0; index < colorBotones.length; index++) {

                if (colorBotones[index] == colores[i]) {
                    contador++;
                    console.log(contador)
                }

                if (contador >= 3) {
                    haGanado = true;
                    break;
                } 

            }


        }
        if (haGanado) {
            setGanador("¡Has ganado!");
            alert("¡Felicidades, has ganado!");
        } else {
            setGanador("Seguir jugando");
        }


        setMensaje(`Intento ${contador}`);


    }, [contador]);

    const manejarClick = () => {
        const nuevosColores = colorBotones.map(() => {
            const indiceAleatorio = Math.floor(Math.random() * colores.length);
            return colores[indiceAleatorio];
        });

        setColorBotones(nuevosColores);
        setContador((c) => c + 1);
    };

    return (
        <>
            <div>
                <h1>Ejercicio 02</h1>
                <div>
                    {colorBotones.map((c, i) => (
                        <button
                            key={i}
                            onClick={manejarClick}
                            style={{
                                backgroundColor: c
                            }}
                        >
                            {`Botón ${i + 1}`}
                        </button>
                    ))}
                </div>

                <h2>{mensaje}</h2>
                <h2>{ganador}</h2>
            </div>
        </>
    )
}

export default Ejercicio02;
