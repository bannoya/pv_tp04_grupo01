export function comparacion(num, numeroRandom, contador) {
    if (num <= 100 && num >= 0) {

        if (num > numeroRandom) return ("El numero " + num + " es muy alto")
        if (num < numeroRandom) return ("El numero " + num + " es muy bajo")
        return ("Felicidades Ganaste Crack \nIntento N°:" + contador)
    }else{
        return ("El numero ingresado no es valido")
    }
}
export function rendirse(numeroRandom, contador) {
    return ("El número era " + numeroRandom + ".Realizaste " + contador + " intentos")
}
