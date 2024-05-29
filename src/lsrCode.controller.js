const mis_input = ["nombre", "telefono","email", "curp"];
class validacion{
    vacios(datos_validar){
        for (let i = 0; i < datos_validar.length; i++) {
            let valor = document.getElementById(datos_validar[i]).value;
            if (valor == "") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `El campo ${datos_validar} no puede ir vacio`
                  });
                  break;
            }
        }
    }
    letras (input){
        let validacion = document.getElementById(input).value;
        let letras = /^[a-zA-Z\s]+/;
        if (!letras.test(validacion)){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `El campo ${input} debe contener solo letras.,`
              });
          }
        }

    numeros (input){
        let validacion = document.getElementById(input).value;
        let numeros = /^[\d{0,10}{0,10}]+$/;
        if (!numeros.test(validacion)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `El campo ${input} debe contener solo números.,`
              });
                    }
        }
    email(input){
        let validacion = document.getElementById(input).value;
        let email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.test(validacion)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Escribir un ${input} que sea válido.`
              });
                    }
    }
    curp(input){
        let validacion = document.getElementById(input).value;
        let curp = /^[A-Z\d]{18}$/;
        if (!curp.test(validacion)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Escribir ${input} válido.`
              });
                    }
    }
      }      
   
let validate = new validacion();
const enviar = () =>{
    validate.vacios(mis_input);
    validate.letras("nombre");
    validate.numeros("telefono");
    validate.email("email");
    validate.curp("curp");
}
class lsrCode{
    constructor(url,data,method){
        this.url =url
        this.data =data
        this.method =method
    }
    insersion(){
        fetch(this.url,{
            body:this.data,
            method:this.method
        })
        .then(respuesta=>respuesta.json())
        .then(respuesta=>{
            console.log(respuesta);
        })
    }
    consulta(){
        fetch(this.url,{
            method:this.method,
            body:this.data
        })
        .then(respuesta=>respuesta.json())
        .then(respuesta=>{
            respuesta.map(contenido=>{
                console.log(contenido)
            });
        }).catch(error=>{
            console.log(`Error de la cunsulta: \n${error}`)
        });
    }
}
let datos= new FormData();
datos.append('usuario','front');
datos.append('pass','12345678');
// console.log(datos);
let envio =new lsrCode('./php/info.php',datos,'POST');
envio.insersion();