// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    
    // Transição de entrada suave
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1s';
    window.onload = () => {
        document.body.style.opacity = 1;
    };

    // Evento de clique no botão para redirecionar ao WhatsApp
    ctaButton.addEventListener('click', () => {
        window.location.href = 'https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20imóveis%20para%20aluguel.';
    });
});
