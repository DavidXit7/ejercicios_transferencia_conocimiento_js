let minutos = parseInt(prompt("Ingrese la cantidad de minutos:")); //Se solicita el número de minutos

let horas = Math.floor(minutos / 60); //Se calcula la cantidad de horas
let resto = minutos % 60; //Se calcula el resto de minutos

alert(horas + " horas y " + resto + " minutos"); //Se muestra el resultado
