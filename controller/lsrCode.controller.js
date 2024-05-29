"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var mis_input = ["nombre", "telefono", "email", "curp"];
var validacion = /*#__PURE__*/function () {
  function validacion() {
    _classCallCheck(this, validacion);
  }
  _createClass(validacion, [{
    key: "vacios",
    value: function vacios(datos_validar) {
      for (var i = 0; i < datos_validar.length; i++) {
        var valor = document.getElementById(datos_validar[i]).value;
        if (valor == "") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El campo ".concat(datos_validar, " no puede ir vacio")
          });
          break;
        }
      }
    }
  }, {
    key: "letras",
    value: function letras(input) {
      var _validacion = document.getElementById(input).value;
      var letras = /^[a-zA-Z\s]+/;
      if (!letras.test(_validacion)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El campo ".concat(input, " debe contener solo letras.,")
        });
      }
    }
  }, {
    key: "numeros",
    value: function numeros(input) {
      var _validacion2 = document.getElementById(input).value;
      var numeros = /^[\d{0,10}{0,10}]+$/;
      if (!numeros.test(_validacion2)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El campo ".concat(input, " debe contener solo n\xFAmeros.,")
        });
      }
    }
  }, {
    key: "email",
    value: function email(input) {
      var _validacion3 = document.getElementById(input).value;
      var email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.test(_validacion3)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Escribir un ".concat(input, " que sea v\xE1lido.")
        });
      }
    }
  }, {
    key: "curp",
    value: function curp(input) {
      var _validacion4 = document.getElementById(input).value;
      var curp = /^[A-Z\d]{18}$/;
      if (!curp.test(_validacion4)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Escribir ".concat(input, " v\xE1lido.")
        });
      }
    }
  }]);
  return validacion;
}();
var validate = new validacion();
var enviar = function enviar() {
  validate.vacios(mis_input);
  validate.letras("nombre");
  validate.numeros("telefono");
  validate.email("email");
  validate.curp("curp");
};
var lsrCode = /*#__PURE__*/function () {
  function lsrCode(url, data, method) {
    _classCallCheck(this, lsrCode);
    this.url = url;
    this.data = data;
    this.method = method;
  }
  _createClass(lsrCode, [{
    key: "insersion",
    value: function insersion() {
      fetch(this.url, {
        body: this.data,
        method: this.method
      }).then(function (respuesta) {
        return respuesta.json();
      }).then(function (respuesta) {
        console.log(respuesta);
      });
    }
  }, {
    key: "consulta",
    value: function consulta() {
      fetch(this.url, {
        method: this.method,
        body: this.data
      }).then(function (respuesta) {
        return respuesta.json();
      }).then(function (respuesta) {
        respuesta.map(function (contenido) {
          console.log(contenido);
        });
      })["catch"](function (error) {
        console.log("Error de la cunsulta: \n".concat(error));
      });
    }
  }]);
  return lsrCode;
}();
var datos = new FormData();
datos.append('usuario', 'front');
datos.append('pass', '12345678');
// console.log(datos);
var envio = new lsrCode('./php/info.php', datos, 'POST');
envio.insersion();

