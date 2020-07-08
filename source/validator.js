$(document).ready(function () {
    $('.formvalidator').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            identificacion: {
                message: 'digite un numero valido',
                validators: {
                    notEmpty: {
                        message: 'este campo es requerido'
                    },

                    regexp: {
                        regexp: /[0-9\-\_]$/,
                        message: 'Solo se permiten numeros y guiones'
                    }
                }
            },
            telefono: {
                message: 'solo se puede digitar numeros',
                validators: {
                    notEmpty: {
                        message: 'no puede estar vacio'
                    },
                    regexp: {
                        regexp: /\d+(?!\_)/,
                        message: 'Solo se permiten numeros'
                    }


                }
            }
        }
    });
});




