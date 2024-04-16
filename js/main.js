import prompt from "prompt-sync";
const input = prompt();
import contrasenaValida from "./modules/1_exercise.js";
import calcularImpuestos from "./modules/2_exercise.js";
import bmi from "./modules/3_exercise.js"
let bandera = true;


while (bandera) {
    console.clear()
    console.log(`
        ██╗███████╗    ███████╗██╗  ██╗███████╗██████╗  ██████╗██╗███████╗███████╗███████╗
        ██║██╔════╝    ██╔════╝╚██╗██╔╝██╔════╝██╔══██╗██╔════╝██║██╔════╝██╔════╝██╔════╝
        ██║███████╗    █████╗   ╚███╔╝ █████╗  ██████╔╝██║     ██║███████╗█████╗  ███████╗
   ██   ██║╚════██║    ██╔══╝   ██╔██╗ ██╔══╝  ██╔══██╗██║     ██║╚════██║██╔══╝  ╚════██║
   ╚█████╔╝███████║    ███████╗██╔╝ ██╗███████╗██║  ██║╚██████╗██║███████║███████╗███████║
    ╚════╝ ╚══════╝    ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝╚══════╝╚══════╝╚══════╝\n`)

    console.log("1. Contraseña válida")
    console.log("2. Calcular impuestos")
    console.log("3. IMC (Indice de masa corporal)")
    console.log("0. Salir\n")

    let opc = +input("Ingrese el número del ejercicio: ")


    console.clear()
    switch (opc) {
        case 1:
            contrasenaValida();
            break;

        case 2:
            calcularImpuestos();
            break

        case 3:
            bmi();
            break

        case 0:
            bandera = false
            console.clear()
            break
    }

}