import prompt from "prompt-sync"
const input = prompt()

export default function entradaUsuario() {
    let opc = undefined;

    do {
        let peso = input("Peso: ")
        let altura = input("Altura: ")
        console.log(bmi(peso, altura));
        console.log(`1. Repetir la validacion\n0. Terminar`);
        opc = +input()

    } while (opc)

}

function bmi(peso, altura) {


    let imc = peso/altura**2

    if (imc < 18.5){
        return("Bajo de peso")
    } else if (imc >= 18.5 && imc < 24.9){
        return("Normal")
    } else if (imc >= 25 && imc < 29.9){
        return("Sobrepeso")
    } else {
        return("Obeso")
    }

 }