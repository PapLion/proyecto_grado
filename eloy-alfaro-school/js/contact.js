export function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            fetch('https://formsubmit.co/Alfaroeloy580@gmail.com', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    alert('¡Mensaje enviado con éxito!');
                    form.reset();
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