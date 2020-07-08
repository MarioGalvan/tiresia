$("#guardar").click(() => {

    const identificacion = $("#identificacion").val();
    const nombre = $("#nombre").val();
    const telefono = $("#telefono").val();
    const direccion = $("#direccion").val();
    let pais = $("#paises").val();
    const departamento = $("#departamentos").val();
    const ciudad = $("#ciudades").val();

    if (pais === '1') {
        pais = "Colombia";

    }

    if (pais === '2') {
        pais = "Venezuela";

    }

    const persona = {
        identificacion,
        nombre,
        telefono,
        direccion,
        pais,
        departamento,
        ciudad,
    }

    console.table(persona);

    $("#datos").append('<tr><td>' + persona.identificacion + '</td><td>'
        + persona.nombre + '</td><td>' + persona.telefono + '</td><td>' + persona.direccion +
        '</td><td>' + persona.pais + '</td><td>' + persona.departamento + '</td><td>' + persona.ciudad + '</td><td>')
})