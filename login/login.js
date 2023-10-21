const form = document.querySelector('form');
const btnEnviar = document.getElementById('enviar');

form.addEventListener('submit', function(event) {
    event.preventDefault();
});

const validar = () => {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    // Restablecer cualquier mensaje de error previo
    passwordError.innerHTML = '';

    // Validar la contraseña
    if (password.length < 8) {
        passwordError.innerHTML = 'La contraseña debe tener al menos 8 caracteres.';
        return false;
    } else if (!/[A-Z]/.test(password)) {
        passwordError.innerHTML = 'La contraseña debe contener al menos una letra mayúscula.';
        return false;
    } else if (!/[a-z]/.test(password)) {
        passwordError.innerHTML = 'La contraseña debe contener al menos una letra minúscula.';
        return false;
    } else if (!/\d/.test(password)) {
        passwordError.innerHTML = 'La contraseña debe contener al menos un número.';
        return false;
    }
    console.log('ok')
    return true;
};

btnEnviar.addEventListener('click', () => {
    if(validar()) {
        // Acá iría la llamada al back para la autenticación
        alert('Ingreso Correcto!');
        window.location.href = "/index.html";
    }
});