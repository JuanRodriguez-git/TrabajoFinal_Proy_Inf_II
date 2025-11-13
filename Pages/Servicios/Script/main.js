document.addEventListener('DOMContentLoaded', () => {
V
    const tarjetasProfesional = document.querySelectorAll('.profesional-card');
    const seccionSeleccion = document.getElementById('seleccion-profesional');
    const infoContenedor = document.getElementById('profesional-info-seleccionado');
    const botonContratar = document.getElementById('btn-contratar');
    const mensajeConfirmacion = document.getElementById('mensaje-contratacion');

    tarjetasProfesional.forEach(card => {
        card.addEventListener('click', () => {

            mensajeConfirmacion.style.display = 'none';

            const nombre = card.querySelector('h4').textContent;
            const imagenSrc = card.querySelector('.profesional-imagen').src;
            const imagenAlt = card.querySelector('.profesional-imagen').alt;

            const contenidoHTML = `
                <img src="${imagenSrc}" alt="${imagenAlt}">
                <h4>${nombre}</h4>
            `;

            infoContenedor.innerHTML = contenidoHTML;
            seccionSeleccion.style.display = 'block';
        });
    });

    botonContratar.addEventListener('click', () => {
        seccionSeleccion.style.display = 'none';

        mensajeConfirmacion.textContent = '✅ ¡Profesional contratado con éxito! Nos pondremos en contacto contigo.';
        mensajeConfirmacion.style.display = 'block';

        setTimeout(() => {
            mensajeConfirmacion.style.display = 'none';
        }, 5000);
    });
});