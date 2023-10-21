fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const contactInfo = document.getElementById('contactInfo');
        contactInfo.innerHTML = `
            <p><strong>Nombre:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Correo Electrónico:</strong> ${user.email}</p>
            <p><strong>Teléfono:</strong> ${user.phone}</p>
            `;
            const userImage = document.getElementById('userImage');
            userImage.src = user.picture.large;
        })
    .catch(error => console.error(error));