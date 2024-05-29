    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('registroForm');
        form.addEventListener('submit', function(event) {
            const nombre = document.getElementById('nombre').value.trim();
            const apellido = document.getElementById('apellido').value.trim();
            const email = document.getElementById('correo_electronico').value.trim();
            const usuario = document.getElementById('usuario').value.trim();
            const password = document.getElementById('password').value;

            if (nombre.length < 3) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El nombre debe tener al menos 3 caracteres.'
                });
                event.preventDefault();
                return;
            }

            if (apellido.length < 4) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El apellido debe tener al menos 4 caracteres.'
                });
                event.preventDefault();
                return;
            }

            if (nombre.match(/[^A-Za-zÁÉÍÓÚáéíóú\s]/)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El nombre solo puede contener letras.'
                });
                event.preventDefault();
                return;
            }

            if (apellido.match(/[^A-Za-zÁÉÍÓÚáéíóú\s]/)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El apellido solo puede contener letras.'
                });
                event.preventDefault();
                return;
            }

            if (!usuario.match(/^[a-zA-Z0-9_]+$/)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El usuario solo puede contener letras, números y guiones bajos.'
                });
                event.preventDefault();
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, introduce un correo electrónico válido.'
                });
                event.preventDefault();
                return;
            }

            const userRegex = /^[a-zA-Z0-9_]+$/;
            if (!userRegex.test(usuario)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El usuario solo puede contener letras, números y guiones bajos.'
                });
                event.preventDefault();
                return;
            }

            if (password.length < 8) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'La contraseña debe tener al menos 8 caracteres.'
                });
                event.preventDefault();
                return;
            }
        });
    });