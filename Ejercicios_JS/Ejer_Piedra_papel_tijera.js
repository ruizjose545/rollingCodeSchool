//let resultados = ["piedra","papel","tijera"]

let num_usuario = parseInt(prompt("ingrese un valor para jugar(1= piedra, 2= papel, 3= tijera)"))

let num_aleatorio = crear_num_aleatorio(2)

let eleccion_usuario= resultados[num_usuario -1]

let eleccion_computadora = resultados[num_aleatorio]

let result

function quien_gana(eleccion_usuario, eleccion_computadora) {
    if (eleccion_computadora === eleccion_usuario) {
        return 'Empate'
    } else {
        if (eleccion_usuario === 'papel' && eleccion_computadora === 'piedra') {
            return 'tu ganas'
        }
        if eleccion_usuario === 'papel' && eleccion_computadora === 'tijera') {
            return 'tu pierdes' 
        }
        if eleccion_usuario === 'piedra' && eleccion_computadora === 'papel') {
            return 'tu pierdes' 
        }
        if eleccion_usuario === 'piedra' && eleccion_computadora === 'tijera') {
            return 'tu ganas' 
        }
        if eleccion_usuario === 'tijera' && eleccion_computadora === 'papel') {
            return 'tu ganas' 
        }
        if eleccion_usuario === 'tijera' && eleccion_computadora === 'piedra') {
            return 'tu pierdes' 
        }
    }
}

