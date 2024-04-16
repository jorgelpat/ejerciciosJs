// import prompt from "prompt-sync"
// const input = prompt()

// export default function entradaUsuario() {
//     let opc = undefined;

//     do {
//         let data = input("Ingrese la contraseña: ")
//         console.log(contrasenaValida(data));
//         console.log(`1. Repetir la validacion\n0. Terminar`);
//         opc = +input()

//     } while (opc)

// }

// function contrasenaValida(data) {

//     if (data == "2Fj(jjbFsuj" || data == "eoZiugBf&g9") {
//         return true
//     } else return false
// }

function validarContrasena() {
    let contrasena = document.getElementById("contrasenaInput").ariaValueMax;
    let esValida = contrasenaValida(contrasena);
    if (esValida) {
        document.getElementById("resultado").innerText = "Contraseña Valida"; 
    } else {
        document.getElementById("resultado").innerText = "Contraseña Incorrecta";
    }
}

function contrasenaValida(contrasena) {
    return contrasena === "1234" || contrasena === "4567";
}