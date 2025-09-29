let kilometros = parseFloat(prompt("Ingrese los kilómetros recorridos:")); //Se solicita la distancia recorrida
let consumo = parseFloat(prompt("Ingrese el consumo por kilómetro (litros/km):")); //Se solicita el consumo por km

let total_litros = kilometros * consumo; //Se calcula el total de litros consumidos

alert("El total de litros consumidos es: " + total_litros); //Se muestra el resultado
