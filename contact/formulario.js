const validarFormulario = () => {
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;

    const dniRegex = /^[0-9]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!dni.match(dniRegex)) {
        alert("El DNI debe contener solo números.");
        return false;
    }

    if (!email.match(emailRegex)) {
        alert("Ingrese un correo electrónico válido.");
        return false;
    }

    return true;
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validarFormulario()) {
        window.location.href = "/contact/contacto.html";
    }
});