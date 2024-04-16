import prompt from "prompt-sync"
const input = prompt()

export default function entradaUsuario() {
    let opc = undefined;

    do {
        let edad = +input("Ingrese su edad: ")
        let ingresos = +input("Ingrese el valor de sus ingresos: ")
        console.log(calcularImpuestos(edad, ingresos));
        console.log(`1. Repetir la validacion\n0. Terminar`);
        opc = +input()

    } while (opc)

}

function calcularImpuestos(edad, ingresos){

    if (edad >= 18 && ingresos >= 1000){
        return ingresos * 0.40

    }else return 0

}



//Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.