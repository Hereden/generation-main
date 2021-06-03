/**Crear un objeto que se llame persona, el ejemplo debe tener 
un nombre, sus apellidos, edad y debe tener un método para saludar. Otro método donde diga su edad.
En consola imprimir el resultado de ambos métodos*/
var persona = {
    nombre: "Cesar",
    apellido: "Juarez Perez",
    edad: 22,
    ini: function (nom, ape, ed) {
        this.nombre = nom;
        this.apellido = ape;
        this.edad = ed;
    },
    saludar: function () {
        console.log("Hola, yo soy " + this.nombre + " " + this.apellido);
    },
    decirEdad: function () {
        console.log("Tengo " + this.edad + " tantos años.");
    }
}

persona.saludar();
persona.decirEdad();
/**Hacer una función donde le pasemos los parametros (nombre, apellidos, edad,)
 * esta funcion tendrá dentro un objeto
 * los datos que reciba la función llenarán el objeto.
 * La función debe retornar el objeto.
 */

function crearPersona(nom,ape,edad){
    persona.ini(nom,ape, edad);
    return persona;
}
var persona1=new Object();
persona1=crearPersona("Carla","Mendoza Fernandez", 26);
persona1.saludar();
persona1.decirEdad();
