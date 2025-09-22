export function comparacion (num, numeroRandom,contador) {
    
    if (num > numeroRandom) return ("El numero " + num + " es muy alto")
    if (num < numeroRandom) return ("El numero " + num + " es muy bajo")
    return ("Felicidades Ganaste Crack \nIntento N°:"+ contador)
}
export function rendirse (numeroRandom,contador) {
    return ("El número era " + numeroRandom +".Realizaste "+ contador +" intentos")
}
