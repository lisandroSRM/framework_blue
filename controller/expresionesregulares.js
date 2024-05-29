"use strict";

document.getElementById('myForm').addEventListener('submit', function (event) {
  // Evitar el envío del formulario por defecto
  event.preventDefault();

  // Obtener el valor del correo electrónico ingresado
  var emailInput = document.getElementById('email').value;

  // Expresión regular para validar un correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validar el correo electrónico
  if (!emailRegex.test(emailInput)) {
    // Mostrar un mensaje de error si el correo electrónico no es válido
    document.getElementById('emailError').innerHTML = '¡Ingrese un correo electrónico válido!';
  } else {
    // Limpiar el mensaje de error si el correo electrónico es válido
    document.getElementById('emailError').innerHTML = '';
    // Aquí puedes agregar el código para enviar el formulario si es válido
    // Por ejemplo, puedes agregar: document.getElementById('myForm').submit();
  }
});