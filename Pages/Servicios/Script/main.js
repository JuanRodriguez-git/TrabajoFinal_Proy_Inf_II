document.addEventListener('DOMContentLoaded', () => {

    //Selecciona todas las tarjetas de profesionales.
    const tarjetasProfesional = document.querySelectorAll('.profesional-card');

    //Sección donde se mostrará el profesional seleccionado.
    const seccionSeleccion = document.getElementById('seleccion-profesional');

    //Contenedor donde se insertará la información del profesional elegido.
    const infoContenedor = document.getElementById('profesional-info-seleccionado');

    //Botón para confirmar el profesional.
    const botonContratar = document.getElementById('btn-contratar');

    //Mensaje que aparecerá cuando la selección se complete.
    const mensajeConfirmacion = document.getElementById('mensaje-contratacion');

    //Recorre cada tarjeta y agrega un evento al hacer clic.
    tarjetasProfesional.forEach(card => {
        card.addEventListener('click', () => {
            
            //Oculta el mensaje de confirmación si estaba visible anteriormente.
            mensajeConfirmacion.style.display = 'none';

            //Obtiene el nombre y la imagen del profesional seleccionado.
            const nombre = card.querySelector('h4').textContent;
            const imagenSrc = card.querySelector('.profesional-imagen').src;
            const imagenAlt = card.querySelector('.profesional-imagen').alt;

            //Crea el HTML a mostrar en la sección de selección.
            const contenidoHTML = `
                <img src="${imagenSrc}" alt="${imagenAlt}">
                <h4>${nombre}</h4>
            `;

            //Inserta la info del profesional dentro del contenedor.
            infoContenedor.innerHTML = contenidoHTML;
            //Muestra la sección donde aparece el profesional elegido.
            seccionSeleccion.style.display = 'block';
        });
    });

    //Evento para confirmar la selección.
    botonContratar.addEventListener('click', () => {
        //Oculta la sección del profesional seleccionado.
        seccionSeleccion.style.display = 'none';

        //Muestra el mensaje de confirmación.
        mensajeConfirmacion.textContent = '✅ ¡Profesional contratado con éxito! Nos pondremos en contacto contigo.';
        mensajeConfirmacion.style.display = 'block';

        //Después de 5 segundos, oculta nuevamente el mensaje.
        setTimeout(() => {
            mensajeConfirmacion.style.display = 'none';
        }, 5000);
    });
});