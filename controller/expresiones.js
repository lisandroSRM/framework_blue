"use strict";

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var nombreInput = document.getElementById('nombre').value;
  var nombreExpr = /^[\sA-Za-z]+$/;
  var telefonoInput = document.getElementById('telefono').value;
  var telefonoExpr = /^[\d{0,10}{0,10}]+$/;
  var emailInput = document.getElementById('email').value;
  var emailExpr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //Validacion nombre
  if (!nombreExpr.test(nombreInput)) {
    document.getElementById('nombreSuccess').innerHTML = '';
    document.getElementById('nombreError').innerHTML = '¡Ingrese nombre válido!';
  } else {
    document.getElementById('nombreError').innerHTML = '';
    document.getElementById('nombreSuccess').innerHTML = 'Ok, todo bien';
  }
  //validacion telefono 
  if (!telefonoExpr.test(telefonoInput)) {
    document.getElementById('telSuccess').innerHTML = '';
    document.getElementById('telError').innerHTML = '¡Ingrese telefono válido!';
  } else {
    document.getElementById('telError').innerHTML = '';
    document.getElementById('telSuccess').innerHTML = 'Ok, todo bien';
  }

  //validacion email
  if (!emailExpr.test(emailInput)) {
    document.getElementById('emailSuccess').innerHTML = '';
    document.getElementById('emailError').innerHTML = '¡Ingrese email válido!';
  } else {
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('emailSuccess').innerHTML = 'Ok, todo bien';
  }
});