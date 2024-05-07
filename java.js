// Solicitar al usuario tres numeros
let numero1 = prompt("Ingrese el primer numero");
let numero2 = prompt("Ingrese el segundo numero");
let numero3 = prompt("IIngrese el tercer numero");
 
// convertir los numeros a cadena 
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
numero3 = parseFloat(numero3);


if (numero1 === numero2 && numero2 === numero3){
    console.log("Los numeros son iguales")
} else{

 let mayor, centro, menor;

 if (numero1 >= numero2 && numero1 >= numero3){
    mayor = numero1;
    centro = Math.max(numero2, numero3);
    menor = Math.min(numero2, numero3);
 } else if (numero2 >= numero1 && numero2 >= numero3){
    mayor = numero2;
    centro = Math.max(numero1, numero3);
    menor = Math.min(numero1, numero3);
 }else {
    mayor = numero3;
    centro = Math.max(numero1, numero2);
    menor = Math.min(numero1, numero2);

 }
 console.log(`Ordenalos de mayor a menor: ${mayor}, ${centro}, ${menor}` );
 console.log(`Ordenalos de menor a mayor: ${menor}, ${centro}, ${mayor}` );
}