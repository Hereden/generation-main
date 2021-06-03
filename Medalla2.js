//1.-Funcion suma y llamarlo 5 veces
function suma(numero1,numero2){
    console.log("La suma de los numeros es: " + (numero1+numero2));
}
suma(1,23);
suma(34,144);
suma(3551,1515);
suma(24,55);
suma(5,3);
//2.-Crear array de meses e imprimirlos en consola
var meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]);
console.log(meses[3]);
console.log(meses[4]);
console.log(meses[5]);
console.log(meses[6]);
console.log(meses[7]);
console.log(meses[8]);
console.log(meses[9]);
console.log(meses[10]);
console.log(meses[11]);
//3.-Imprimirlos en consola con un ciclo
var i;
for(i=0;i<12;i++){
    console.log(meses[i]);
}

//Extra
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))

    