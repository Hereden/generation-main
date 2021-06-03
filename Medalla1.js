//Reto Operaciones Aritmeticas
alert("Hola\nMundo");
var numero1 = parseInt(prompt("Escribe el primer numero:"));
var numero2 = parseInt(prompt("Escribe el primer numero:"));

var suma = numero1 + numero2;
var multiplicacion = numero1 * numero2;
var resta = numero1 - numero2;
var division;
if (numero2>0){
    division = numero1 / numero2;
}else if (numero1>0){
    division = numero2 / numero1;
}else{
    division = 0;
}


console.log("La suma de los numeros es: " + suma);
console.log("La resta de los numeros es: " + resta);
console.log("La multiplicacion de los numeros es: " + multiplicacion);
console.log("La division de los numeros es: " + division);



//Reto operaciones Logicas
var nombre=prompt("Escribe tu nombre: ");
var edad=parseInt(prompt("Escribe tu edad"));

if(edad>=18 && edad<29){
    console.log("Felicidades " + nombre + " has sido seleccionado para el programa de Generation.");
}else{
    console.log("Lo sentimos " + nombre + ", no has sido seleccionado para el programa ): .");
}

//Reto Nomina

var salarioDiario= prompt("Favor de ingresar tu salario diario:");
var salarioQuincenalBruto= salarioDiario * 15;
var salarioMensualBruto= (salarioDiario * 365)/12;
var salarioNetoMensual= salarioMensualBruto -(salarioMensualBruto*0.3) - (salarioMensualBruto*0.1);
var salarioNetoQuincenal=salarioQuincenalBruto - (salarioQuincenalBruto*0.3) - (salarioQuincenalBruto*0.1);
console.log("Tu salario bruto quincenal es:" + salarioQuincenalBruto);
console.log("Tu salario neto quincenal es: " + salarioNetoQuincenal);
console.log("Tu salario bruto mensual es: " + salarioMensualBruto);
console.log("Tu salario neto mensual es: " + salarioNetoMensual);
