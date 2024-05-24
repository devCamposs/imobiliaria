/*
-------------------------------------------------------------------------
NOME..: indexController.js
LANG..: nodeJS
TITULO: Modulo controller index
DATA..: 15/05/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
15/05/2024    0      Thomas Campos     Elaboração
---------------------------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        let valid = true;

        // Validação do nome
        if (name.value.length < 3) {
            name.classList.add('is-invalid');
            valid = false;
        } else {
            name.classList.remove('is-invalid');
            name.classList.add('is-valid');
        }

        // Validação do email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }

        if (valid) {
            form.submit();
        } else {
            event.stopImmediatePropagation();
        }
    });

    // Remove a classe 'is-invalid' quando o usuário começa a digitar
    document.querySelectorAll('#contactForm .form-control').forEach(input => {
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                input.classList.remove('is-invalid');
            }
        });
    });
});
