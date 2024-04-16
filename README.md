# 1. Contraseña válida

Escribir una función llamada ```contrasenaValida``` que reciba un string y retorne ```true``` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar ```false```.

```javascript
// CODIGO DE PRUEBA

console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false
```

# 2. Calcular impuestos

Escribir una función llamada ```calcularImpuestos``` que reciba dos argumentos numéricos: ```edad``` e ```ingresos```. Si ```edad``` es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ```ingresos``` * 40%. De lo contrario retornar 0.

```javascript
// CODIGO DE PRUEBA

console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0
```