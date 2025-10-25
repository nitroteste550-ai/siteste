// Efeito de digitação para o título
document.addEventListener('DOMContentLoaded', function() {
    // Animação de hover nos botões sociais
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.querySelector('i').style.transform = 'rotate(10deg)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.querySelector('i').style.transform = 'rotate(0deg)';
        });
    });

    // Efeito parallax para os elementos de grafiti
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const grafitiElements = document.querySelectorAll('.grafiti-element');
        
        grafitiElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            element.style.transform = `rotate(-15deg) translateY(${scrollPosition * speed}px)`;
        });
    });
});
