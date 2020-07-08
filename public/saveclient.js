"use strict";

$("#guardar").click(function () {
  var identificacion = $("#identificacion").val();
  var nombre = $("#nombre").val();
  var telefono = $("#telefono").val();
  var direccion = $("#direccion").val();
  var pais = $("#paises").val();
  var departamento = $("#departamentos").val();
  var ciudad = $("#ciudades").val();

  if (pais === '1') {
    pais = "Colombia";
  }

  if (pais === '2') {
    pais = "Venezuela";
  }

  var persona = {
    identificacion: identificacion,
    nombre: nombre,
    telefono: telefono,
    direccion: direccion,
    pais: pais,
    departamento: departamento,
    ciudad: ciudad
  };
  console.table(persona);
  $("#datos").append('<tr><td>' + persona.identificacion + '</td><td>' + persona.nombre + '</td><td>' + persona.telefono + '</td><td>' + persona.direccion + '</td><td>' + persona.pais + '</td><td>' + persona.departamento + '</td><td>' + persona.ciudad + '</td><td>');
});