"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Main = /*#__PURE__*/function () {
  function Main(nombre, apellido, edad, estatura) {
    _classCallCheck(this, Main);
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estatura = estatura;
  }
  _createClass(Main, [{
    key: "mostrarDatos",
    value: function mostrarDatos() {
      console.info("\n            NOMBRE: ".concat(this.nombre, ",\n            APELLIDO: ").concat(this.apellido, ",\n            EDAD: ").concat(this.edad, ",\n            ESTATURA:").concat(this.estatura));
    }
  }, {
    key: "actualizarDatos",
    value: function actualizarDatos() {
      var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.nombre;
      var apellido = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.apellido;
      var edad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.edad;
      var estatura = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.estatura;
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.estatura = estatura;
    }
  }, {
    key: "setNombre",
    value: function setNombre(estatura) {
      this.estatura = estatura;
    }
  }, {
    key: "getNombre",
    value: function getNombre(estatura) {
      return this.estatura;
    }
  }]);
  return Main;
}();
var persona1 = new Main("Lisandro", "Solis", 21, 175);
var persona2 = new Main("Diego", "melendez", 27, 170);
persona1.mostrarDatos();
persona2.mostrarDatos();
persona2.actualizarDatos("Marlon", "Torres");
persona2.mostrarDatos();