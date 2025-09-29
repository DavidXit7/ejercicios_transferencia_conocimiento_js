let distancia = parseFloat(prompt("Ingrese la distancia del recorrido en km:")); //Se solicita la distancia
let velocidad = parseFloat(prompt("Ingrese la velocidad promedio en km/h:")); //Se solicita la velocidad promedio

let tiempo = distancia / velocidad; //Se calcula el tiempo estimado

alert("El tiempo estimado de viaje es: " + tiempo + " horas"); //Se muestra el resultado
