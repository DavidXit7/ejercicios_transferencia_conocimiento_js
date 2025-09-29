let nombre_producto = prompt("Ingrese el nombre del producto: "); //Se solicitan datos de entrada
let precio_producto = parseInt(prompt("Ingrese el precio del producto: "));
let cantidad_producto = parseInt(prompt("Ingrese la cantidad de producto comprada: "));

total = precio_producto * cantidad_producto; //Se realiza el calculo del total a pagar por el producto

alert("El total a pagar por" + cantidad_producto + nombre_producto + "es de: " + total ) //Se imprime el total a pagar por el producto