export function comparacion(num, numeroRandom) {
    if (num <= 100 && num > 0) {

        if (num > numeroRandom) return ("El numero " + num + " es muy alto")
        if (num < numeroRandom) return ("El numero " + num + " es muy bajo")
        return ("Felicidades Ganaste Crack ")
    }else{
        return ("El numero ingresado no es valido")
    }
}
export function rendirse(numeroRandom, contador) {
    return ("El nÃºmero era " + numeroRandom + ", Realizaste " + contador + " intentos")
}
 