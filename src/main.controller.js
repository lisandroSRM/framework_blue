class Main{
    constructor(nombre,apellido,edad,estatura){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.estatura=estatura
    }
    mostrarDatos(){
        console.info(`
            NOMBRE: ${this.nombre},
            APELLIDO: ${this.apellido},
            EDAD: ${this.edad},
            ESTATURA:${this.estatura}`
        );
    }
    actualizarDatos(nombre=this.nombre,apellido=this.apellido,edad=this.edad,estatura=this.estatura){
        this.nombre =nombre
        this.apellido=apellido
        this.edad=edad
        this.estatura=estatura
    }
    setNombre(nombre){
        this.nombre=nombre
    }
    getNombre(nombre){
        return this.nombre
    }
    setNombre(apellido){
        this.apellido=apellido
    }
    getNombre(apellido){
        return this.apellido
    }
    setNombre(edad){
        this.edad=edad
    }
    getNombre(edad){
        return this.edad
    }
    setNombre(estatura){
        this.estatura=estatura
    }
    getNombre(estatura){
        return this.estatura
    }
}


let persona1 = new Main("Lisandro","Solis",21,175);
let persona2 = new Main("Diego","melendez",27,170);
persona1.mostrarDatos();
persona2.mostrarDatos();
persona2.actualizarDatos("Marlon","Torres");




persona2.mostrarDatos();