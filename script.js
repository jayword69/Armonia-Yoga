document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gracias por tu mensaje. Te contactaremos pronto.');
            contactForm.reset();
        });
    }

    // Animación para las tarjetas de clase
    gsap.utils.toArray('.class-card').forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            }
        });
    });

    // Animación para los íconos de redes sociales
    gsap.from('.social-icon', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
        }
    });
});
// Añade este código al final de tu archivo script.js existente

document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const comment = this.querySelector('textarea').value;
            
            // Aquí normalmente enviarías los datos a un servidor
            // Por ahora, solo simularemos añadir el comentario a la página
            
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <h4>${name}</h4>
                <p>${comment}</p>
            `;
            
            commentsList.appendChild(commentElement);
            
            // Limpiar el formulario
            this.reset();
        });
    }
});