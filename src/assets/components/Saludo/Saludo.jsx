import "../../../../public/style/Saludo.css"


function Saludo({ nombre, apellido }) {
    return (
        <div className="saludo-container">
            <h2 className="saludo-title">Este es nuestro componente</h2>
            <h1 className="saludo-item">
                SALUDO a {nombre.nombre1} {apellido.apellido1}
            </h1>
            <h1 className="saludo-item">
                SALUDO a {nombre.nombre2} {apellido.apellido2}
            </h1>
            <h1 className="saludo-item">
                SALUDO a {nombre.nombre3} {apellido.apellido3}
            </h1>
        </div>
    )

}

export default Saludo

