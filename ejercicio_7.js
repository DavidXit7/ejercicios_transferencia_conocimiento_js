let precio = parseFloat(prompt("Ingrese el precio del producto:")); //Se solicita el precio del producto

let descuento = precio * 0.10; //Se calcula el 10% de descuento
let precio_final = precio - descuento; //Se calcula el precio final

alert("El precio final con 10% de descuento es: " + precio_final); //Se muestra el resultado
