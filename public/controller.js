"use strict";

//Esta parte se podria hacer con algun plugin o una API pero por tiempo y validaciones lo
//hize de la manera mas sencilla
var paises = document.getElementById("paises");
var ciudades = document.getElementById("ciudades");
var departamentos = document.getElementById("departamentos");
var departamentoscolombia = ['Cesar', 'Antioquia', 'Bogota'];
var departamentosvenezuela = ['Zulia', 'Merida', 'Miranda'];
var ciudadescesar = ['Valledupar', 'Bosconia', 'Pueblo Bello'];
var ciudadesantioquia = ['Medellin', 'Rionegro', 'bello'];
var ciudadesbogota = ['Usaquen', 'Chapinero', 'Bosa'];
var ciudadeszulia = ['maracaibo', 'cabimas', 'machiques'];
var ciudadesmerida = ['tabai', 'bailadores', 'timotes'];
var ciudadesmiranda = ['caracas', 'guarenas', 'guatire'];

var llenardepartamento = function llenardepartamento(pais) {
  if (pais === '1') {
    for (var i = 0; i < departamentoscolombia.length; i++) {
      departamentos.options[i] = new Option(departamentoscolombia[i], departamentoscolombia[i]);
    }
  }

  if (pais === '2') {
    for (var i = 0; i < departamentosvenezuela.length; i++) {
      departamentos.options[i] = new Option(departamentosvenezuela[i], departamentosvenezuela[i]);
    }
  }
};

var llenarciudades = function llenarciudades(departamento) {
  if (departamento.toLowerCase() === 'cesar') {
    for (var i = 0; i < ciudadescesar.length; i++) {
      ciudades.options[i] = new Option(ciudadescesar[i], ciudadescesar[i]);
    }
  }

  if (departamento.toLowerCase() === 'antioquia') {
    for (var i = 0; i < ciudadesantioquia.length; i++) {
      ciudades.options[i] = new Option(ciudadesantioquia[i], ciudadesantioquia[i]);
    }
  }

  if (departamento.toLowerCase() === 'bogota') {
    for (var i = 0; i < ciudadesbogota.length; i++) {
      ciudades.options[i] = new Option(ciudadesbogota[i], ciudadesbogota[i]);
    }
  }

  if (departamento.toLowerCase() === 'zulia') {
    for (var i = 0; i < ciudadeszulia.length; i++) {
      ciudades.options[i] = new Option(ciudadeszulia[i], ciudadeszulia[i]);
    }
  }

  if (departamento.toLowerCase() === 'merida') {
    for (var i = 0; i < ciudadesmerida.length; i++) {
      ciudades.options[i] = new Option(ciudadesmerida[i], ciudadesmerida[i]);
    }
  }

  if (departamento.toLowerCase() === 'miranda') {
    for (var i = 0; i < ciudadesmiranda.length; i++) {
      ciudades.options[i] = new Option(ciudadesmiranda[i], ciudadesmiranda[i]);
    }
  }
};

paises.addEventListener('change', function (event) {
  // limpiarciudadesydepartamentos();
  var pais_seleccionado = event.target.value;
  llenardepartamento(pais_seleccionado);
});
departamentos.addEventListener('change', function (event) {
  var departamento_seleciconado = event.target.value;
  llenarciudades(departamento_seleciconado);
  console.log(departamento_seleciconado);
});