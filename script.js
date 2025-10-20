document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');
    const body = document.body;

    // Función para aplicar el tema (oscuro o claro)
    const applyTheme = (isDark) => {
        if (isDark) {
            body.classList.add('dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    };

    // Detectar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Cargar tema guardado o usar preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme === 'dark');
    } else {
        applyTheme(prefersDark.matches);
    }

    // Listener para el botón de toggle
    darkModeToggle.addEventListener('click', () => {
        applyTheme(!body.classList.contains('dark'));
    });

    // Listener para cambios en la preferencia del sistema
    prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) { // Solo si el usuario no ha elegido un tema manualmente
            applyTheme(e.matches);
        }
    });

    // Smooth scroll para los links de la navbar
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Asegurarse de que es un ancla interna
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Simulación de envío de formulario
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío real del formulario
        alert('¡Mensaje enviado! 📧 Nos pondremos en contacto contigo pronto.');
        contactForm.reset(); // Limpia el formulario después del envío
    });
});