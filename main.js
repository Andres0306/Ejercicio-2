// Ejercicio 1
var numAleatorios = [];
for (var i = 0; i < 10; i++) {
    numAleatorios.push(Math.floor(Math.random() * 100)); // Generar números aleatorios entre 0 y 99
}
console.log("Ejercicio 1:");
console.log(numAleatorios);

// Ejercicio 2
// string con varias palabras separadas por coma en un popup y se convierten en un array
var inputUsuario = prompt("Ingrese números separados por coma (ejemplo: 1,2,3,4,5):");
var arrayUsuario = inputUsuario.split(",").map(Number); // Convertir el string en array de números
console.log("Ejercicio 2:");
console.log(arrayUsuario);

// Ejercicio 3
// Imprimir el arreglo ordenado, el número menor y el número mayor.
var arregloNumeros = [10, 40, 30, 20, 15, 5];
arregloNumeros.sort(function(a, b) { return a - b; }); // Ordenar el arreglo de menor a mayor
var numeroMenor = arregloNumeros[0];
var numeroMayor = arregloNumeros[arregloNumeros.length - 1];
console.log("Ejercicio 3:");
console.log("Arreglo ordenado:", arregloNumeros);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);