export function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            fetch('https://formsubmit.co/estudiantedanilolopez@gmail.com', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    alert('¡Mensaje enviado con éxito!');
                    form.reset(); // Clear the form
                } else {
                    alert('Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.');
                }
            })
            .catch(error => {
                alert('Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.');
            });
        });
    }
}